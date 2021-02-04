import styled from "styled-components";

import paralax from "../../assets/paralax.jpg";

export const StyledParalax = styled.section`
  width: 100vw;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
    url(${paralax});
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
  text-align: center;

  h1 {
    width: 90%;
    font-size: 1.2rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  svg {
    padding: 20px 0;
    font-size: 2rem;
    color: #4aab67;
  }

  @media screen and (min-width: 768px) {
    h1 {
      width: 60%;
    }
  }
`;
