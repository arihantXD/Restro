import Product from "@/models/ProductModel";
import { productSchema } from "@/schemas/ProductSchema";
import { connectToDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const body = await req.json();
    const parsedBody = productSchema.safeParse(body);
    if (!parsedBody.success) {
      return NextResponse.json(
        {
          message: "Validation failed while creating product",
          errors: parsedBody.error.flatten(),
        },
        { status: 400 }
      );
    }
    await Product.create(parsedBody.data);
    return NextResponse.json(
      {
        message: "Product created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error while creating product", error);
    return NextResponse.json(
      {
        message: "Error while creating product",
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectToDB();
    const data = await Product.find({});
    return NextResponse.json(
      {
        message: "All products fetched successfully",
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while fetching all products", error);
    return NextResponse.json(
      {
        message: "Error while fetching all products",
        error: error,
      },
      { status: 500 }
    );
  }
}
