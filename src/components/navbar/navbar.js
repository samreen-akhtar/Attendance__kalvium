import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <a href="#"></a>
        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
      </div>
      <div className="navbar__right">
        <a href="#">UserName</a>
        <a href="#">
          <FontAwesomeIcon icon={faUser} />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
