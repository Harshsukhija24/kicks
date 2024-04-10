import { NextResponse } from "next/server";
import resell from "../../Data/resell.json";

export const GET = async () => {
  return NextResponse.json(resell);
};
