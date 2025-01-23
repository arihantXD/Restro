import Order from "@/models/OrderModel";
import { orderSchema } from "@/schemas/OderSchema";
import { connectToDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { orderId: string } }
) {
  try {
    await connectToDB();
    const orderId = await params.orderId;
    const data = await Order.findById(orderId);
    if (!data) {
      return NextResponse.json(
        {
          message: "Order not found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "Order fetched successfully",
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while fetching order",
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { orderId: string } }
) {
  try {
    await connectToDB();
    const { orderId } = await params;
    const body = await req.json();
    const parsedBody = orderSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        {
          message: "Validation failed while updating order",
          errors: parsedBody.error.flatten(),
        },
        { status: 400 }
      );
    }
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      parsedBody.data
    );
    if (!updatedOrder)
      return NextResponse.json(
        {
          message: "Order not found",
        },
        { status: 404 }
      );
    return NextResponse.json(
      {
        message: "Order updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while updating order", error);
    return NextResponse.json(
      {
        message: "Error while updating order",
        error: error,
      },
      { status: 500 }
    );
  }
}
