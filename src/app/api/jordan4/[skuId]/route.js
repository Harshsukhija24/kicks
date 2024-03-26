import { NextResponse } from "next/server";
import jordan4 from "../../../Data/jordan4.json";

export const GET = async (req, { params }) => {
  const { skuId } = params;
  const filterData = jordan4.products.find((item) => item.skuId === skuId);
  return NextResponse.json(filterData);
};
