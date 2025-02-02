import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://images.creativemarket.com/0.1.0/ps/7478538/1820/1213/m1/fpnw/wm1/g9mnsjp56mvubl2itgsjclhabl6yow14q4jmatgn7tblembywv5m06axdjnd3zzf-.jpg?1576662269&s=2a71ffff0cb768dff6f9ee3cdd31e07d"
            alt="logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-xl font-bold">AI Tutor</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/python-tutor"
              className="hover:text-blue-400 transition duration-300"
            >
              Your Tutor
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
