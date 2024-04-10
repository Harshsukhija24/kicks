import { NextResponse } from "next/server";
import Newsnekaers from "../../../Data/new.json";

export const GET = async (req, { params }) => {
  try {
    const { skuId } = params;
    console.log("Requested skuId:", skuId);

    const filterData = Newsnekaers.find((item) => item.skuId === skuId);

    return NextResponse.json(filterData);
  } catch (error) {
    return NextResponse.error("Failed to fetch product data", { status: 500 });
  }
};
