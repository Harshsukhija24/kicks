import { NextResponse } from "next/server";

import LimitedEdition from "../../Data/limitedEdition.json";

export const GET = async () => {
  return NextResponse.json(LimitedEdition);
};
