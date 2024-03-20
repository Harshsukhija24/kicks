import { NextResponse } from "next/server";
import newArrival from "../../../Data/newArrival";

export const GET = async (req, { params }) => {
  const { skuId } = params;
  const filterData = newArrival.products.find((item) => item.skuId === skuId);
  return NextResponse.json(filterData);
};
