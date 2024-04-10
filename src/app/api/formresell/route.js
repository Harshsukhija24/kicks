import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  if (req.method === "POST") {
    try {
      // Get the form data from the request body
      const formData = await req.json();

      // Define the path to the JSON file
      const dataFilePath = path.join(
        process.cwd(),
        "src",
        "app",
        "Data",
        "resell.json"
      );

      // Check if the file exists (callback-based approach)
      fs.exists(dataFilePath, (exists) => {
        if (!exists) {
          // Create the file with an empty array if it doesn't exist
          fs.writeFile(dataFilePath, "[]", (err) => {
            if (err) {
              console.error("Error creating resell.json:", err);
              return NextResponse.json(
                { message: "Failed to add data" },
                { status: 500 }
              );
            }
          });
        }

        // Read the existing JSON data from the file
        fs.readFile(dataFilePath, "utf-8", (err, data) => {
          if (err) {
            console.error("Error reading resell.json:", err);
            return NextResponse.json(
              { message: "Failed to add data" },
              { status: 500 }
            );
          }

          const jsonData = data;
          const existingData = JSON.parse(jsonData);

          // Add the new data to the existing data array
          existingData.push(formData);

          // Write the updated data back to the JSON file
          fs.writeFile(
            dataFilePath,
            JSON.stringify(existingData, null, 2),
            (err) => {
              if (err) {
                console.error("Error writing to resell.json:", err);
                return NextResponse.json(
                  { message: "Failed to add data" },
                  { status: 500 }
                );
              }

              // Respond with a success message using NextResponse
              return NextResponse.json(
                {
                  message: "Data added successfully",
                },
                { status: 200 }
              );
            }
          );
        });
      });
    } catch (error) {
      // Respond with an error message if an error occurs
      console.error("Error adding data:", error);
      return NextResponse.json(
        { message: "Failed to add data" },
        { status: 500 }
      );
    }
  } else {
    // Respond with a method not allowed error for non-POST requests
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
}
