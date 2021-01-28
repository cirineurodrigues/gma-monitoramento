import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1002;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px 0px;
}


  ul,
  li,
  a {
    display: none;
  }

  .container {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  img {
    width: 110px;
  }

  #hamburguerMenu {
    width: 28px;
    height: 21px;
    cursor: pointer;
  }

  .stripe {
    width: 100%;
    height: 2.5px;
    background-color: #9E9E9E;
  }

  .stripe:first-child {
    transition: 0.3s ease;
    transform: ${({ isMenuClosed }) =>
      isMenuClosed ? "translateY(0)" : "translateY(9px) rotateZ(-45deg)"};
  }

  .stripe:nth-child(2) {
    transition: 0.3s ease;
    background-color: #4AAB67;
    transform: translateY(7px);
    opacity: ${({ isMenuClosed }) => (isMenuClosed ? "1" : "0")};
  }

  .stripe:last-child {
    transition: 0.3s ease;
    transform: ${({ isMenuClosed }) =>
      isMenuClosed ? "translateY(14px)" : "translateY(4px) rotate(45deg)"};
  }

  @media screen and (min-width: 768px) {
    #hamburguerMenu {
      display: none;
    }

    .container {
      width: 95%;
    }

    img {
      cursor: pointer;
    }

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    li {
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: 8%;
      list-style: none;
      font-size: 1.2rem;
      color: #9E9E9E;
      cursor: pointer;
    }

    li:hover {
      transition: .3s;
      color: #4AAB67
    }
  }
`;
