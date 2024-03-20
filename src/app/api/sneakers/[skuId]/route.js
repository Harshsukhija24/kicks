import { NextResponse } from "next/server";

import sneakersdata from "../../../Data/sneakers.json";

export const GET = async (req, { params }) => {
  const { skuId } = params;
  const filterData = sneakersdata.products.find((item) => item.skuId === skuId);
  return NextResponse.json(filterData);
};
