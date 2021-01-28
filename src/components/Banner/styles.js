import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: calc(100vh - 40px);
  margin-top: 80px;
  position: relative;

  .slant {
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    fill: #fff;
  }
`;

export const Test = styled.div`
  display: flex;
`;

export const ImageDiv = styled.div`
  width: 100vw;
  height: calc(100vh - 40px);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: ${(props) => `url(${props.test})`};
  background-position: center;
  background-size: cover;
`;

export const TextDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15%;

  @media screen and (min-width: 768px) {
    margin-bottom: 5%;
  }

  span {
    padding: 5px 10px;
    text-align: center;
    color: #141414;
  }

  .mainText {
    margin: 5px 0;
    font-size: 1.1rem;
    background-color: #4aab67;
  }

  .text {
    font-size: 1.1rem;
    font-weight: 550;
    background-color: #8ec4b8;
  }
`;
