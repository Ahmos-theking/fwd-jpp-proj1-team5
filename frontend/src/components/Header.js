import { Fragment } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header className="App-header">
      <div className="logo">E-Shop</div>

      <div className="search-field">
        <input type="text" name="search" placeholder="Search Products" />
        <FaSearch style={{ fill: "#282c34", marginLeft: "0.5rem" }} />
      </div>

      <div className="main-menu">
        <ul>
          <li className="App-link">Login</li>
          <li className="App-link">Signup</li>
          <li className="App-link">
            <BsFillCartFill />
          </li>
        </ul>
      </div>
    </header>
  );
}
