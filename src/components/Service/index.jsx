import { Container, TextContainer, Separator } from "./styles";

const Service = ({ title, text, list, image, alt, reverse = false }) => {
  return (
    <Container reverse={reverse}>
      <TextContainer>
        <h2>{title}</h2>
        <Separator />
        <p>{text}</p>
        {list && (
          <ul>
            {list.map((current, idx) => (
              <li key={idx}>{current}</li>
            ))}
          </ul>
        )}
      </TextContainer>
      <img src={image} alt={alt} />
    </Container>
  );
};

export default Service;
