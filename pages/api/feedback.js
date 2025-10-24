import dbConnect from "../../lib/db";
import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  message: String,
  anonymous: Boolean,
  author: String,
});

const Feedback =
  mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const fb = await Feedback.create(req.body);
    return res.status(201).json(fb);
  }

  if (req.method === "GET") {
    const all = await Feedback.find().sort({ _id: -1 });
    return res.status(200).json(all);
  }

  res.status(405).end();
}
