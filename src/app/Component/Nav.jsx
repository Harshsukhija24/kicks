import Link from "next/link";

const Nav = () => {
  return (
    <div className=" bg-sky-600 text-white py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div>
            <Link href="/Logout">
              <div className="flex items-center space-x-2  text-black cursor-pointer">
                <span className="text-sm">Login</span>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/Register">
              <div className="flex items-center space-x-2 text-black cursor-pointer">
                <span className="text-sm">Register</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex items-center">
          <Link href="/Cart">
            <div className="flex items-center text-black space-x-2 cursor-pointer">
              <span className="text-sm">Cart</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
