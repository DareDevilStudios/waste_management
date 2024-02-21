import axios from "axios";

export default async function handler(req, res) {
    const result = await req.body
    const data = JSON.parse(result.body)
    // get the id from req header
    console.log("data received : " + data.Vehicle_id)

    let latitude = 10.02;
    let longitude = 20.07;

    // if ("geolocation" in navigator) {
    //     // Get current position
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //       // Access latitude and longitude from the position object
    //       latitude = position.coords.latitude;
    //       longitude = position.coords.longitude;

    //       // Do something with the latitude and longitude
    //       console.log("Latitude: " + latitude);
    //       console.log("Longitude: " + longitude);
    //     });
    //   } else {
    //     // Geolocation is not supported
    //     console.log("Geolocation is not supported by this browser.");
    //   }

    const track_update_details = {
        "latitude": latitude.toString(),
        "longitude": longitude.toString(),
        "speed": Math.floor(Math.random() * 81).toString(),
        "heading": 3.14.toString(),
        "vehicle": data.Vehicle_id,
    }
    console.log("data bounds : " + JSON.stringify(track_update_details))
    try {
        const result = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/gps/track`, track_update_details);

        // console.log("result", result.data); // Logging the response data

        res.status(200).json(result.data); // Sending response data back to the client
    } catch (error) {
        // console.error("Error:", error);
        res.status(500).json({ error: error}); // Sending an error response
    }
}
