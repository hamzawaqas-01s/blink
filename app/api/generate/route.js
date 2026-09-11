import clientPromise from "@/lib/mongodb"


export async function POST(request) {
  try {
    let body = await request.json();
    const client = await clientPromise;
    const db = client.db("blink");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shortUrl: body.shortUrl });
    if (doc) {
      return Response.json({ success: false, error: true, message: "shortUrl not available" });
    }

    await collection.insertOne({ url: body.url, shortUrl: body.shortUrl });

    return Response.json({ success: true, error: false, message: "URL generated successfully" });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false, error: true, message: "Server error" }, { status: 500 });
  }
}