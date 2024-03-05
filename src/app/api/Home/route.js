import { NextResponse } from "next/server";
import HomeData from "../../Data/Home.json"; // Importing the products data

export const GET = async () => {
  return NextResponse.json(HomeData);
};
