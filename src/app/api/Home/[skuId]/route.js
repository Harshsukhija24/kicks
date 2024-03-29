import { NextResponse } from "next/server";
import HomeData from "../../../Data/Home.json"; // Importing the products data

export const GET = async (req, { params }) => {
  const { skuId } = params;
  const filterData = HomeData.products.find((item) => item.skuId === skuId);
  return NextResponse.json(filterData);
};
