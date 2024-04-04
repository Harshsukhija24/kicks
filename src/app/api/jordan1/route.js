import { NextResponse } from "next/server";
import jordan1 from "../../Data/jordan1.json";

export const GET = async () => {
  return NextResponse.json(jordan1);
};

/*

import fs from 'fs';
import path from 'path';

const productsFilePath = path.join(process.cwd(), 'Data', 'jordan1.json');

export default function handler(req, res) {
  try {
    // Read the JSON file synchronously
    const productsData = fs.readFileSync(productsFilePath, 'utf-8');
    // Parse the JSON data
    const products = JSON.parse(productsData);
    // Return the products in the response
    res.status(200).json(products);
  } catch (error) {
    // If an error occurs, return an error response
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

*/
