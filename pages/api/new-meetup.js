import { MongoClient } from "mongodb"

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body

        const client = await MongoClient.connect("mongodb+srv://mohamedzzaki2000s:m9sW5KNytwJfYdw7@cluster0.pgwoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        const db = client.db()

        const meetupsCollections = db.collection('meetups')
        const result = await meetupsCollections.insertOne(data)

        client.close()

        res.status(201).json({ message: "Meetup inserted!" })

    }
}

export default handler