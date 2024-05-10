import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="mx-4 mb-8">
          <Link href="/Size" className="text-blue-300 hover:text-blue-400">
            Size Chart
          </Link>
        </div>
        <div className="mx-4 mb-8">
          <h1 className="text-xl font-bold mb-4">About Brands</h1>
          <ul>
            <li>
              <Link href="/Nike" className="text-blue-300 hover:text-blue-400">
                Nike
              </Link>
            </li>
            <li>
              <Link
                href="/Addidas"
                className="text-blue-300 hover:text-blue-400"
              >
                Adidas
              </Link>
            </li>
            <li>
              <Link href="/Puma" className="text-blue-300 hover:text-blue-400">
                Puma
              </Link>
            </li>
            <li>
              <Link
                href="/Newbalance"
                className="text-blue-300 hover:text-blue-400"
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
                className="text-blue-500 hover:underline"
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
