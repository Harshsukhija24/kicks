import { NextResponse } from "next/server";
import jordan1 from "../../Data/jordan1.json";

export const GET = async () => {
  return NextResponse.json(jordan1);
};
