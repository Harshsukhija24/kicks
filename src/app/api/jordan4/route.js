import { NextResponse } from "next/server";
import jordan4 from "../../Data/jordan4.json";

export const GET = async () => {
  return NextResponse.json(jordan4);
};
