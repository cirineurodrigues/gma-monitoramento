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

export const ContactContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  img {
    width: 250px;
  }

  ul {
    width: fit-content;
    padding: 20px 0;
  }

  li {
    padding: 1% 0;
    text-align: center;
    list-style: none;
  }

  a {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    transition: 0.3s;
    color: #4aab67;
  }

  .icon {
    font-size: 1.3rem;
    padding-right: 5px;
  }
`;
