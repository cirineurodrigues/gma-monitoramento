import { Container, ImageDiv, TextDiv } from "./styles";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import licenciamentoAmbiental from "../../assets/licenciamentoAmbiental.jpg";
import desenvolvimentoSustentavel from "../../assets/desenvolvimentoSustentavel.jpg";
import monitoramentoAtmosferico from "../../assets/monitoramentoAtmosferico.jpg";

const Banner = () => {
  const responsive = {
    mobile: {
      breakpoint: {
        max: 3000,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <Container>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <ImageDiv test={licenciamentoAmbiental}>
          <TextDiv>
            <span className="mainText">LICENCIAMENTO AMBIENTAL</span>
            <span className="text">Cuidamos bem do Meio Ambiente</span>
          </TextDiv>
        </ImageDiv>
        <ImageDiv test={desenvolvimentoSustentavel}>
          <TextDiv>
            <span className="mainText">DESENVOLVIMENTO SUSTENTAVEL</span>
            <span className="text">Abraçamos essa ideia</span>
          </TextDiv>
        </ImageDiv>
        <ImageDiv test={monitoramentoAtmosferico}>
          <TextDiv>
            <span className="mainText">MONITORAMENTO ATMOSFÉRICO</span>
            <span className="text">Melhor qualidade do ar</span>
          </TextDiv>
        </ImageDiv>
      </Carousel>
      <svg
        class="slant"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,100 100,0 100,100" />
      </svg>
    </Container>
  );
};

export default Banner;
