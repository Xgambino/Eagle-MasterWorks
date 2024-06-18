import { Button, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import '/home/gambi/P3/P3-project/front-end/src/index.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo"> 
        <NavLink to="/">EAGLE MASTERWORKS</NavLink>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/catalogue" className={({ isActive }) => isActive ? "active" : ""}>Catalogue</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Offers" className={({ isActive }) => isActive ? "active" : ""}>Offers</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/news" className={({ isActive }) => isActive ? "active" : ""}>News</NavLink>
        </li>
        <li className="nav-contact">
          <NavLink to="/contact-us" className={({ isActive }) => isActive ? "active" : ""}>Contact Us</NavLink>
        </li>
        {/* <Nav.Item>
							<NavLink to="/add-to-catalogue" className="">
								<Button>Add catalogue</Button>
							</NavLink>
						</Nav.Item> */}
      </ul>
    </div>
  );
};

export default Navbar;
