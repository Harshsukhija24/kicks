import User from "@/app/(models)/User";
import { connectDb } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import Bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are neccesary" },
        { status: 404 }
      );
    }
    const hashedpassword = await Bcrypt.hash(password, 10);
    await connectDb();
    await User.create({ name, email, password: hashedpassword });

    return NextResponse.json({ message: "user Creates" }, { status: 201 });
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json({ message: "an error occured" }, { status: 501 });
  }
}
