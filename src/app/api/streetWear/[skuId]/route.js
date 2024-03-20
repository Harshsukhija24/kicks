import { NextResponse } from "next/server";
import StreetWear from "../../../Data/streetWear.json";

export const GET = async (req, { params }) => {
  const { skuId } = params;
  const filterData = StreetWear.products.find((item) => item.skuId === skuId);
  return NextResponse.json(filterData);
};
