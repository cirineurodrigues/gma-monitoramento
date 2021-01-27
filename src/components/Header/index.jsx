import { useState } from "react";
import { useHistory } from "react-router-dom";

import { StyledHeader } from "./styles";

import MobileMenu from "../MobileMenu";

import logo from "../../assets/logo.png";

const Header = () => {
  const history = useHistory();
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const setClosed = () => {
    setIsMenuClosed(!isMenuClosed);
  };
  const menuItems = ["Home", "Serviços", "Clientes", "Contato"];

  return (
    <>
      <StyledHeader isMenuClosed={isMenuClosed}>
        <div className="container">
          <img src={logo} alt="Logo GMA" onClick={() => history.push("/")} />
          <nav>
            <div id="hamburguerMenu" onClick={setClosed}>
              <div className="stripe"></div>
              <div className="stripe"></div>
              <div className="stripe"></div>
            </div>
            <ul>
              {menuItems.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </nav>
        </div>
      </StyledHeader>
      <MobileMenu
        isMenuClosed={isMenuClosed}
        setClosed={setClosed}
        menuItems={menuItems}
      />
    </>
  );
};

export default Header;
