import User from "@/models/UserModel";
import { userSchema } from "@/schemas/UserSchema";
import { connectToDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const body = await req.json();
    const parsedBody = userSchema.safeParse(body);
    if (!parsedBody.success) {
      return NextResponse.json(
        {
          message: "Validation failed while creating user",
          errors: parsedBody.error.flatten(),
        },
        { status: 400 }
      );
    }
    const hash = bcrypt.hashSync(parsedBody.data.password, 10);
    parsedBody.data.password = hash;
    console.log(parsedBody);
    await User.create(parsedBody.data);
    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Error while registering user",
        error: error,
      },
      { status: 500 }
    );
  }
}
