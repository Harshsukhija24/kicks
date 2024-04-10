// server.js (or your server file)

import { NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function DELETE(req) {
  if (req.method === "DELETE") {
    try {
      // Adjust these variables based on your needs:
      const filePath = `${process.cwd()}/src/app/data/resell.json`; // Path to the JSON file
      const deleteCriteria = req.body.slug; // Property or criteria for deletion (e.g., product ID)

      // Read file data
      const fileDataString = await fs.readFile(filePath, "utf-8");
      const fileData = JSON.parse(fileDataString);

      // Filter data to remove items based on the criteria
      const filteredData = fileData.filter(
        (product) => product[deleteCriteria] !== req.body[deleteCriteria]
      ); // Access deletion value from request body

      // Write updated data back to the file
      await fs.writeFile(
        filePath,
        JSON.stringify(filteredData, null, 2),
        "utf-8"
      );

      return NextResponse.json({ message: "Product deleted successfully" });
    } catch (error) {
      console.error("Error deleting product:", error);
      return NextResponse.json(
        { message: "Error deleting product" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Unsupported request method" },
      { status: 405 }
    );
  }
}
