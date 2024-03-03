import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-8 bg-gray-900 text-white">
      <div className="mx-4">
        <h1 className="text-xl font-bold mb-4">About Brands</h1>
        <ul>
          <li><Link href="/Nike">Nike</Link></li>
          <li><Link href="/Addidas">Adidas</Link></li>
          <li><Link href="/Puma">Puma</Link></li>
          <li><Link href="/Newbalance">NewBalance</Link> </li>
        </ul>
      </div>
      <div className="mx-4">
        <h1 className="text-xl font-bold mb-4">Know More</h1>
        <ul>
          <li>Discover the endless possibilities of sneaker trading.</li>
          <li>Join our community and unlock exclusive benefits.</li>
          <li>Explore new collaborations and expand your network.</li>
          <li>
            Reach out to us at{" "}
            <a
              href="mailto:reseller@kick.com"
              className="text-blue-500 hover:underline"
            >
              reseller@kick.com
            </a>{" "}
            to learn more.
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
