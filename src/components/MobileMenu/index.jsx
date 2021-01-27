import { StyledMobileMenu } from "./styles";

const MobileMenu = ({ isMenuClosed, setClosed, menuItems }) => {
  return (
    <StyledMobileMenu isMenuClosed={isMenuClosed}>
      <nav>
        <ul>
          {menuItems.map((value, index) => (
            <li key={index} onClick={{ setClosed }}>
              {value}
            </li>
          ))}
        </ul>
      </nav>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
