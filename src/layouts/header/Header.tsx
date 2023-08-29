import { NavLink } from "react-router-dom";

import "../../index.css"
import "./header.css"
import Logo from "../../assets/wealthHealth_logo-noBG.png";

export default function Header() {
  return (
    <>
      <header>
      <img src={Logo} alt="Wealth Health logo" className="logo" />
        <nav>
          <NavLink to="/">
              <h1>Wealth Heath</h1>
          </NavLink>
          <NavLink to="/">View Current Employees</NavLink>
        </nav>
      </header>
    </>
  );
}
