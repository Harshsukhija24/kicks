import { NextResponse } from "next/server";

import LimitedEdition from "../../../Data/limitedEdition.json";

export const GET = async (req, { params }) => {
  const { skuId } = params;
  const filterData = LimitedEdition.products.find(
    (item) => item.skuId === skuId
  );
  return NextResponse.json(filterData);
};
