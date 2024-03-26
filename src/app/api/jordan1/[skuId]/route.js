import { NextResponse } from "next/server";
import jordan1 from "../../../Data/jordan1.json";

export const GET = async (req, { params }) => {
  const { skuId } = params;
  const filterData = jordan1.products.find((item) => item.skuId === skuId);
  return NextResponse.json(filterData);
};
