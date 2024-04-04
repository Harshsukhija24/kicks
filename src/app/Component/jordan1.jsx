import React from "react";
import Image from "next/image";
import Link from "next/link";

const Jordan1 = ({ jordan1 }) => {
  // Check if jordan1 exists and contains products
  if (!jordan1 || !jordan1.products) {
    return <div>Products not found</div>;
  }

  const { products } = jordan1;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Jordan 1 Sneakers</h1>
      <div className="flex flex-nowrap overflow-x-auto">
        {products.map((product) => (
          <div
            key={product.slug}
            className="bg-blue-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 mr-4"
            style={{ minWidth: "300px" }} // Adjust the minimum width of each item
          >
            <Link href={`/jordan1/${product.skuId}`}>
              <a>
                <Image
                  src={product.imgUrl}
                  height={300}
                  width={100}
                  alt={product.name}
                  className="w-full h-40 object-cover object-center"
                />
              </a>
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p className="text-gray-800">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:3000/api/jordan1");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return { props: { jordan1: data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { jordan1: null } };
  }
}

export default Jordan1;
