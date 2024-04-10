import { NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function POST(req) {
  // Validate request method (optional)
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Unsupported request method" },
      { status: 405 }
    );
  }

  try {
    // Read data from JSON files (handle errors)
    const sourcePath = `${process.cwd()}/src/app/data/resell.json`;
    const destinationPath = `${process.cwd()}/src/app/data/new.json`;
    const [sourceDataString, destinationDataString] = await Promise.all([
      fs.readFile(sourcePath, "utf-8"),
      fs.readFile(destinationPath, "utf-8").catch(() => "[]"), // Initialize as empty array if destination doesn't exist
    ]);

    const parsedSourceData = JSON.parse(sourceDataString);
    const parsedDestinationData = JSON.parse(destinationDataString);

    // Create a Set to store unique slugs from the source data
    const uniqueSlugs = new Set(parsedDestinationData.map((item) => item.slug));

    // Filter source data and create merged data with unique slugs
    const mergedData = [
      ...parsedDestinationData,
      ...parsedSourceData.filter((item) => !uniqueSlugs.has(item.slug)),
    ];

    // Write merged data to destination JSON file (handle errors)
    await fs.writeFile(
      destinationPath,
      JSON.stringify(mergedData, null, 2),
      "utf-8"
    );

    return NextResponse.json({
      message: "Unique data (based on slug) transferred successfully",
    });
  } catch (error) {
    console.error("Error transferring data:", error);
    return NextResponse.json(
      { message: "Error transferring data" },
      { status: 500 }
    );
  }
}
