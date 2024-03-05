import { NextResponse } from "next/server";
import streetWear from "../../Data/streetWear.json";

export const GET = async () => {
  return NextResponse.json(streetWear);
};
