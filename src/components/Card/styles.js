import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  padding: 5% 1%;
  border-bottom: 5px solid #4aab67;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.75);

  @media screen and (min-width: 768px) {
    width: 30%;
    margin: 0;
  }

  button {
    display: inline-block;
    margin: 0 auto;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4aab67;
  font-size: 5rem;
`;

export const TextContainer = styled.div`
  h1 {
    color: #4aab67;
    font-size: 1.2rem;
    text-align: center;
    padding: 15px 0;
  }

  p {
    text-align: center !important;
    text-indent: 0 !important;
  }
`;
