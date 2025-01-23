import Product from "@/models/ProductModel";
import { productSchema } from "@/schemas/ProductSchema";
import { connectToDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    await connectToDB();
    const { productId } = await params;
    const data = await Product.findById(productId);
    if (!data) {
      return NextResponse.json(
        {
          message: "Product not found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "Product fetched successfully",
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while fetching all products",
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    await connectToDB();
    const { productId } = await params;
    const body = await req.json();
    const parsedBody = productSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        {
          message: "Validation failed while updating product",
          errors: parsedBody.error.flatten(),
        },
        { status: 400 }
      );
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      parsedBody.data
    );
    if (!updatedProduct)
      return NextResponse.json(
        {
          message: "Product not found",
        },
        { status: 404 }
      );
    return NextResponse.json(
      {
        message: "Product updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while updating product", error);
    return NextResponse.json(
      {
        message: "Error while updating product",
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    await connectToDB();
    const { productId } = await params;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct)
      return NextResponse.json(
        {
          message: "Product not found",
        },
        { status: 404 }
      );
    return NextResponse.json(
      {
        message: "Product deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while deleting product", error);
    return NextResponse.json(
      {
        message: "Error while deleting product",
        error: error,
      },
      { status: 500 }
    );
  }
}
