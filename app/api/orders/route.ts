import Order from "@/models/OrderModel";
import { orderSchema } from "@/schemas/OderSchema";
import { connectToDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const body = await req.json();
    const parsedBody = orderSchema.safeParse(body);
    if (!parsedBody.success) {
      return NextResponse.json(
        {
          message: "Validation failed while creating order",
          errors: parsedBody.error.flatten(),
        },
        { status: 400 }
      );
    }
    await Order.create(parsedBody.data);
    return NextResponse.json(
      {
        message: "Order created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error while creating order", error);
    return NextResponse.json(
      {
        message: "Error while creating order",
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectToDB();
    const data = await Order.find({});
    return NextResponse.json(
      {
        message: "All orders fetched successfully",
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while fetching all orders", error);
    return NextResponse.json(
      {
        message: "Error while fetching all orders",
        error: error,
      },
      { status: 500 }
    );
  }
}
