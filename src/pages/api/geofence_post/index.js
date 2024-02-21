import axios from "axios";

export default async function handler(req, res) {
    const result_ = await req.body;
    const bounds_data = {
        name: "sample path" + "  " + Math.random(),
        geometry: result_,
        Vehicle_id : 2,
    }
    // console.log("data received : " + JSON.stringify(result_))
    // console.log("data bounds : " + JSON.stringify(bounds_data))
    try {
        const result = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/gps/geofence`, bounds_data);

        // console.log("result", result.data); // Logging the response data

        res.status(200).json(result.data); // Sending response data back to the client
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" }); // Sending an error response
    }
    // res.status(200).json(result); // Sending response data back to the client   
}
