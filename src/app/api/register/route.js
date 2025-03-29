import connectDB from "@/app/utils/dbConnect";
import Registration from "@/app/model/registration";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, event } = await req.json();
    if (!name || !email || !event) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    const newRegistration = await Registration.create({ name, email, event });

    return Response.json(
      { message: "Registration successful!", data: newRegistration },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error in API Route:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
    try {
      await connectDB();
      const registrations = await Registration.find();
      
      return Response.json(registrations, { status: 200 });
    } catch (error) {
      console.error("❌ Error fetching registrations:", error);
      return Response.json({ error: "Server error" }, { status: 500 });
    }
  }