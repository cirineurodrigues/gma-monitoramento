import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;

  img {
    padding-bottom: 20px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  }
`;

export const TextContainer = styled.div`
  width: 100%;

  h2 {
    text-align: center;
  }

  ul {
    padding: 10px 5% 0;
  }

  li {
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    width: 60%;

    ul {
      padding: 10px 2.5% 0;
    }
  }
`;

export const Separator = styled.div`
  width: 15%;
  min-width: 100px;
  height: 3px;
  margin: 15px auto;
  background-color: #4aab67;
`;
