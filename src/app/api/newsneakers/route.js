import { NextResponse } from "next/server";
import newsneakers from "../../Data/new.json";

export const GET = async () => {
  return NextResponse.json(newsneakers);
};
