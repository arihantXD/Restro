import Restaurant from "@/models/RestaurantModel";
import { restaurantSchema } from "@/schemas/RestaurantSchema";
import { connectToDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const body = await req.json();
    const parsedBody = restaurantSchema.safeParse(body);
    if (!parsedBody.success) {
      return NextResponse.json(
        {
          message: "Validation failed while creating restaurant",
          errors: parsedBody.error.flatten(),
        },
        { status: 400 }
      );
    }
    await Restaurant.create(parsedBody.data);
    return NextResponse.json(
      {
        message: "Restaurant created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error while creating restaurant", error);
    return NextResponse.json(
      {
        message: "Error while creating restaurant",
        error: error,
      },
      { status: 500 }
    );
  }
}
