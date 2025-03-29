import { NextResponse } from "next/server";
import connectDB from "@/app/utils/dbConnect";
import Post from "@/app/model/post";


export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find(); // Fetch all posts
    return NextResponse.json({ posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Failed to fetch posts", error: err.message }, { status: 500 });
  }
}
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { title, content, author, tags, imageUrl } = body;

    const newPost = new Post({ title, content, author, tags, imageUrl });
    await newPost.save();

    return NextResponse.json({ message: "Post created successfully", post: newPost }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Failed to create post", error: err.message }, { status: 500 });
  }
}
