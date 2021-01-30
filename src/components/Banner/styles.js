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

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`;

export const TextDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15%;

  span {
    padding: 5px 10px;
    text-align: center;
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

  @media screen and (min-width: 768px) {
    align-items: flex-end;
    margin-bottom: 0;
    padding-right: 3.5vw;

    span {
      text-align: right;
    }

    .mainText {
      font-size: 2rem;
    }

    .text {
      font-size: 1.5rem;
    }
  }
`;
