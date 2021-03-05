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

export const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  img {
    padding: 20px;
    margin: 0 auto;
    cursor: not-allowed;
  }

  img:hover {
    transition: 0.3s;
    padding: 0;
    width: 240px;
  }

  @media screen and (min-width: 768px) {
    min-height: 70vh;
  }
`;
