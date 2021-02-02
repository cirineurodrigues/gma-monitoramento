import styled from "styled-components";

export const StyledCard = styled.div`
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-basis: 1;
  padding: 1%;
  border-bottom: 5px solid #4aab67;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 5px 5px 8px 0px rgba(184, 184, 184, 1);
  background-color: #fff;

  @media screen and (min-width: 768px) {
    flex-basis: 30%;
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
    padding-bottom: 15px;
  }

  p {
    text-align: center !important;
    text-indent: 0 !important;
  }
`;
