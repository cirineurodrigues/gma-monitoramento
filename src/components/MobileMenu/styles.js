import styled from "styled-components";

export const StyledMobileMenu = styled.div`
  width: 100vw;
  max-width: 100%;
  height: calc(100vh - 80px);
  position: fixed;
  top: 80px;
  z-index: 1001;
  transition: 0.3s ease;
  left: ${({ isMenuClosed }) => (isMenuClosed ? "100%" : "0")};
  background-color: #fff;

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  ul {
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  li {
    width: 100%;
    height: 33%;
    border-bottom: 1px solid #9e9e9e;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    color: #9e9e9e;
    font-size: 1.5rem;
    cursor: pointer;
  }

  li:hover {
    transition: 0.3s;
    color: #4aab67;
  }

  ul li:last-child {
    border-bottom: none;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
