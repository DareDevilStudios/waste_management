import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GeoFencingMap = () => { 
  const [map1, setMap1] = useState(null);
  const [rectangle, setRectangle] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [rectangleBounds, setRectangleBounds] = useState(null);
  const [coordinates, setCoordinates] = useState([]);


  useEffect(() => {
    // Load the Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAPS_KEY}`;
    script.async = true;
    script.onload = () => {
      // Initialize the map
      const mapInstance = new window.google.maps.Map(document.getElementById('map1'), {
        center: { lat: 0, lng: 0 },
        zoom: 10,
      });
      setMap1(mapInstance);

      // Get user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lng: longitude });
            mapInstance.setCenter({ lat: latitude, lng: longitude });
          },
          error => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };
    document.body.appendChild(script);



    // Fetch data from the server
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/gps/track/2/track-location`)
    .then(response => {
      setCoordinates(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });



    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);


  useEffect(() => {
    // Once map and coordinates are available, draw the track
    if (map1 && coordinates.length > 0) {
      const path = new window.google.maps.Polyline({
        path: coordinates.map(coord => ({
          lat: parseFloat(coord.latitude),
          lng: parseFloat(coord.longitude),
        })),
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      path.setMap(map1);

      // Fit the map bounds to show the entire track
      const bounds = new window.google.maps.LatLngBounds();
      coordinates.forEach(coord => {
        bounds.extend(new window.google.maps.LatLng(coord.latitude, coord.longitude));
      });
      map1.fitBounds(bounds);
    }
  }, [map1, coordinates]);


  useEffect(() => {
    if (rectangle) {
      // Listen for the bounds_changed event of the rectangle
      window.google.maps.event.addListener(rectangle, 'bounds_changed', () => {
        const bounds = rectangle.getBounds();
        if (bounds) {
          const ne = bounds.getNorthEast();
          const sw = bounds.getSouthWest();
          setRectangleBounds({
            north: ne.lat(),
            south: sw.lat(),
            east: ne.lng(),
            west: sw.lng(),
          });
        }
      });
    }
  }, [rectangle]);

  const drawRectangle = () => {
    if (!userLocation) {
      console.error('User location not available.');
      return;
    }

    // Check if a rectangle is already drawn, and remove it
    if (rectangle) {
      rectangle.setMap1(null);
    }

    // Calculate bounds based on user location
    const bounds = {
      north: userLocation.lat + 0.01,
      south: userLocation.lat - 0.01,
      east: userLocation.lng + 0.01,
      west: userLocation.lng - 0.01,
    };

    // Create a new rectangle
    const rectangle = new window.google.maps.Rectangle({
      bounds: bounds,
      editable: true,
      draggable: true,
    });

    // Set the rectangle on the map
    rectangle.setMap(map1);

    // Store the rectangle in the state
    setRectangle(rectangle);
};

const postRectangleBounds = () => {
      console.log(rectangle.getBounds())
    if (rectangleBounds) {
      axios.post(`/api/geofence_post`, rectangleBounds)
        .then(response => {
          console.log('Rectangle bounds sent successfully:', response.data);
        })
        .catch(error => {
          console.error('Error sending rectangle bounds:', error);
        });
    } else {
      console.error('No rectangle bounds available.');
    }
  };

  return (
    <div>
      <div id="map1" style={{ width: '100%', height: '400px' }}></div>
      <button className='bg-gray-500 text-white p-2 m-2' onClick={drawRectangle}>Draw Rectangle</button>
      <button className='bg-gray-500 text-white p-2 m-2' onClick={postRectangleBounds}>Post Rectangle Bounds</button>
    </div>
  );
};

export default GeoFencingMap;




// export default GeoFencingMap;    AIzaSyAy-o5mPxqHlJQDB7LRregnB_anOaQn5i0 