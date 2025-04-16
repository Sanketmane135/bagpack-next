
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { traveller, destination, adult, child, startDate, endDate, hotelType, activities } = req.body;

        if (!traveller || !destination || !startDate || !endDate || !hotelType || !activities) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const client = await clientPromise;
        const db = client.db("bagpack");

        const newTrip = {
            traveller,
            destination,
            adult,
            child,
            startDate,
            endDate,
            hotelType,
            activities,
            createdAt: new Date(),
        };

        const result = await db.collection("trips").insertOne(newTrip);

        res.status(201).json({ message: "Trip stored successfully", tripId: result.insertedId });

    } catch (error) {
        console.error("Error saving trip:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
