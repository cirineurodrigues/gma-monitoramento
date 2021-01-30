import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 30vh;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #303030;
  padding: 20px 0;

  h1 {
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
  }
`;

export const FooterMenu = styled.nav`
  width: 100%;

  ul {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  li {
    font-weight: 550;
    color: #fff;
    list-style: none;
    cursor: pointer;
  }

  li:hover {
    transition: 0.3s;
    color: #4aab67;
  }

  @media screen and (min-width: 768px) {
    ul {
      width: 40%;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 0 10px;
    font-size: 1.2rem;
    color: #303030;
    background-color: #4aab67;
    border-radius: 50%;
  }
`;

export const DevelopedBy = styled.div`
  width: 100%;
  background-color: #4aab67;

  h1 {
    padding: 2vh;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
  }

  a {
    font-weight: 550;
    color: inherit;
    text-decoration: none;
  }
`;
