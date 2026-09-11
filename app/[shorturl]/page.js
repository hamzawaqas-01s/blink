import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const { shorturl } = await params

    const client = await clientPromise;
    const db = client.db("blink");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shortUrl: shorturl });
    if (doc) {
       redirect(doc.url)
    }

    else {
      redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

    return <div>My Post: {shorturl}</div>
}