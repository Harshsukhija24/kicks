import { NextResponse } from "next/server";
import HomeData from "../../../Data/Home.json";

export async function GET(req) {
  const { skuId } = req.query;
  const product = HomeData.products.find((product) => product.skuId === skuId);

  if (!product) {
    return NextResponse.error("Product not found", { status: 404 });
  }

  return NextResponse.json(product);
}
