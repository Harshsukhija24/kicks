import React from "react";
import Nav from "../Component/Nav";

const Page = ({ backgroundColor }) => {
  return (
    <>
      <Nav/>
      <div className={`bg-${backgroundColor}`}>
        <div className="max-w-3xl mx-auto px-4 py-8 text-lg text-white">
          {" "}
          {/* Set text color to white */}
          <h1 className="text-3xl font-bold mb-4">Size Chart</h1>
          <table className="w-full border-collapse border border-gray-300 bg-white text-gray-800">
            {" "}
            {/* Set background color to white */}
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Size</th>
                <th className="border border-gray-300 px-4 py-2">US</th>
                <th className="border border-gray-300 px-4 py-2">UK</th>
                <th className="border border-gray-300 px-4 py-2">EU</th>
                <th className="border border-gray-300 px-4 py-2">Japan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Small</td>
                <td className="border border-gray-300 px-4 py-2">6-8</td>
                <td className="border border-gray-300 px-4 py-2">6-8</td>
                <td className="border border-gray-300 px-4 py-2">36-38</td>
                <td className="border border-gray-300 px-4 py-2">23-25</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Medium</td>
                <td className="border border-gray-300 px-4 py-2">8-10</td>
                <td className="border border-gray-300 px-4 py-2">8-10</td>
                <td className="border border-gray-300 px-4 py-2">38-40</td>
                <td className="border border-gray-300 px-4 py-2">25-27</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Large</td>
                <td className="border border-gray-300 px-4 py-2">10-12</td>
                <td className="border border-gray-300 px-4 py-2">10-12</td>
                <td className="border border-gray-300 px-4 py-2">40-42</td>
                <td className="border border-gray-300 px-4 py-2">27-29</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Page;
