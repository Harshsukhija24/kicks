import { NextResponse } from "next/server";
import StreetWear from "../../Data/streetWear.json";

export const GET = async () => {
  return NextResponse.json(StreetWear);
};
