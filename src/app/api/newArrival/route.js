import { NextResponse } from "next/server";
import newArrival from "../../Data/newArrival";

export const GET = async () => {
  return NextResponse.json(newArrival);
};
