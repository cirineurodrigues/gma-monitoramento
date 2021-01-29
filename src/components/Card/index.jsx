import { StyledCard, IconContainer, TextContainer } from "./styles";

const Card = ({ children, title, text }) => {
  return (
    <StyledCard>
      <IconContainer>{children}</IconContainer>
      <TextContainer>
        <h1>{title}</h1>
        <p>{text}</p>
      </TextContainer>
    </StyledCard>
  );
};

export default Card;
