import axios from "axios";

export default async function handler(req, res) {
    const result_id = await JSON.parse(req.body.body)
    // get the id from req header
    console.log("data received : " + (result_id.id))
    // console.log(req.headers['x-di'])
    try {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/gps/add-vehicle/`+ result_id.id );

        console.log("result", result.data); // Logging the response data

        res.status(200).json(result.data); // Sending response data back to the client
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" }); // Sending an error response
    }
}
