import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  margin: 60px auto;
  text-align: center;

  h1 {
    color: #4aab67;
    font-size: 2rem;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  hr {
    margin: 20px 0;
  }

  p {
    text-align: justify;
    text-indent: 3rem;
    line-height: 1.5;
  }

  @media screen and (min-width: 768px) {
    width: 95%;
    text-align: left;
  }
`;
