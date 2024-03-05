import { NextResponse } from "next/server";

import sneakersdata from "../../Data/sneakers.json";

export const GET = async () => {
  return NextResponse.json(sneakersdata);
};
