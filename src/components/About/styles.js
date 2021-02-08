import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  margin: 100px auto 0;
  text-align: center;

  h1 {
    color: #4aab67;
    font-size: 2rem;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  h3 {
    padding: 20px 0;
    font-size: 1rem;
  }

  hr {
    margin: 15px 0;
  }

  p {
    text-align: justify;
    text-indent: 3rem;
    line-height: 1.5;
  }

  ul {
    padding: 0 5%;
  }

  @media screen and (min-width: 768px) {
    width: 95%;
    text-align: left;

    ul {
      padding: 0 2.5%;
    }
  }
`;
