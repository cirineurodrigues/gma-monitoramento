import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  margin: 100px auto 20px;
  text-align: center;

  h1 {
    color: #4aab67;
    font-size: 2rem;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
  }
  hr {
    margin: 15px 0;
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

export const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
