import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-sky-600 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="mx-4 mb-8">
          <Link
            href="/Size"
            className=" hover:text-black-600   hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-black"
          >
            Size Chart
          </Link>
        </div>
        <div className="mx-4 mb-8">
          <h1 className="text-xl font-bold mb-4">About Brands</h1>
          <ul>
            <li>
              <Link
                href="/Nike"
                className=" hover:text-black-600   hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-black"
              >
                Nike
              </Link>
            </li>
            <li>
              <Link
                href="/Addidas"
                className=" hover:text-black-600   hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-black"
              >
                Adidas
              </Link>
            </li>
            <li>
              <Link
                href="/Puma"
                className=" hover:text-black-600   hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-black"
              >
                Puma
              </Link>
            </li>
            <li>
              <Link
                href="/Newbalance"
                className=" hover:text-black-600   hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-black"
              >
                New Balance
              </Link>
            </li>
          </ul>
        </div>
        <div className="mx-4 mb-8">
          <h1 className="text-xl font-bold mb-4">Know More</h1>
          <ul>
            <li>Discover the endless possibilities of sneaker trading.</li>
            <li>Join our community and unlock exclusive benefits.</li>
            <li>Explore new collaborations and expand your network.</li>
            <li>
              Reach out to us at{" "}
              <a
                href="mailto:reseller@kicks.com"
                className="text-black-500 hover:underline"
              >
                reseller@kicks.com
              </a>{" "}
              to learn more.
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
