import { NextResponse } from "next/server";
import HomeData from "../../../Data/Home.json";
export const GET = async (req, { params }) => {
  const { skuId } = params;
  const filterData = HomeData.products.find((item) => item.skuId === skuId);
  return NextResponse.json(filterData);
};
