import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  margin-bottom: 60px;
  background: linear-gradient(
    0deg,
    rgba(109, 185, 132, 1) 0%,
    rgba(74, 171, 103, 1) 100%
  );

  h1 {
    padding-bottom: 10px;
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    text-align: center;
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    cursor: not-allowed;
  }
`;
