import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import TrackDetails from  '../@core/components/vehicle-details'

const VehicleSelector = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const [vehicles, setVehicles] = useState([])
  const [selectedVehicle, setSelectedVehicle] = useState('')
  const [selectedValue, setSelectedValue] = useState('')
  const [trackData, setData] = useState([])

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get(`https://72a5-2405-201-d032-88d4-4ddb-1f54-5bdf-e471.ngrok-free.app/gps/add-vehicle`)
        console.log(`${JSON.stringify(response)}`)
        setVehicles(response.data)
      } catch (error) {
        console.error('Error fetching vehicles:', error)
      }
    }

    fetchVehicles()
  }, [])

  // Trigger fetchData when selectedValue changes
  useEffect(() => {
    if (selectedValue) {
      fetchData(selectedValue)
    }
  }, [selectedValue])

  const handleVehicleChange = event => {
    const selectedValue = event.target.value
    setSelectedVehicle(selectedValue)
    fetchData(selectedValue)

    // localStorage.setItem('selectedVehicle', selectedValue);
  }

  // Function to fetch data based on the selected value
  const fetchData = async selectedValue => {
    try {
      const response = await axiosInstance.get(`/gps/add-vehicle/${selectedValue}`)
      console.log(`-------------------${response}`)
      // const jsonData = await response.json();
      console.log(`-------------------${JSON.stringify(response.data)}`)
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div>
      <select value={selectedVehicle} onChange={handleVehicleChange}>
        <option value=''>Select a vehicle</option>
        {vehicles && vehicles?.map(vehicle => (
          <option key={vehicle.id} value={vehicle.id}>
            {vehicle.name}
          </option>
        ))}
      </select>
      <div>
        {/* {trackData ? (
          <TrackDetails trackData={trackData} />
        ) : (
          <p>Loading...</p>
        )} */}
      </div>
    </div>
  )
}

export default VehicleSelector
