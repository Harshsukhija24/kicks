import { NextResponse } from "next/server";
import women from "../../../Data/women.json";

export const GET = async (req, { params }) => {
  const { skuId } = params;
  const filterData = women.products.find((item) => item.skuId === skuId);
  return NextResponse.json(filterData);
};
