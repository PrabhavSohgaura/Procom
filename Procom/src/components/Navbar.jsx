import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  console.log(searchText);
  return (
    <>
      <nav className="nav_container">
        <div className="nav__logo">Procom</div>
        <div className="nav__searchContainer">
          <input type="text" value={searchText} onChange={handleSearch} />
        </div>
        <div className="nav__profileContainer">
          <span>Profile</span>
          <button>Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
