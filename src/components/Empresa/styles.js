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
    font-weight: 400;
  }
  hr {
    margin: 15px 0;
  }

  p {
    text-align: justify;
    text-indent: 3rem;
    line-height: 1.5;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 95%;
    text-align: left;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: #fff;
    outline: none;
    padding: 0.5% 2%;
    border: 2px solid #4aab67;
    color: #4aab67;
    font-size: 1rem;
    cursor: pointer;
  }

  button:hover {
    transition: 0.3s;
    background-color: #4aab67;
    color: #fff;
  }
`;
