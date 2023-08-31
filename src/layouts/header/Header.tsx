import { NavLink } from "react-router-dom";

import "./header.css";
import Logo from "../../assets/wealthHealth_logo-noBG.png";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/home">
            <img src={Logo} alt="Wealth Health logo" className="logo" />
          </NavLink>
          <h1>Wealth Heath</h1>
          <NavLink to="/employees">View Current Employees</NavLink>
        </nav>
      </header>
    </>
  );
}
