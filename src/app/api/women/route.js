import { NextResponse } from "next/server";
import women from "../../Data/women.json";

export const GET = async () => {
  return NextResponse.json(women);
};
