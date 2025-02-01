import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="flex flex-row justify-between items-center">
        <div>
          <img alt="logo"></img>
        </div>
        <ul className="flex flex-row w-1/4 justify-around">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>about</Link>
          </li>
          <li>
            <Link>help</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
