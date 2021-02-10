import Fade from "react-reveal/Fade";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container, ImageDiv } from "./styles";

import start from "../../assets/start.png";
import cajuba from "../../assets/cajuba.png";
import copagaz from "../../assets/copagaz.png";
import superGasBras from "../../assets/supergasbras.png";
import algar from "../../assets/algar.png";
import syngenta from "../../assets/syngenta.png";
import jbs from "../../assets/jbs.png";
import cargill from "../../assets/cargill.png";
import cocaCola from "../../assets/cocacola.png";
import brf from "../../assets/brf.png";
import pifPaf from "../../assets/pifpaf.png";
import paraTudo from "../../assets/paratudo.png";
import mataBoi from "../../assets/mataboi.png";

const ClientsCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <Fade>
      <Container>
        <h1>Parceiros que confiam na gente:</h1>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
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
          <ImageDiv>
            <img src={start} alt="Logo Start" />
          </ImageDiv>
          <ImageDiv>
            <img src={cajuba} alt="Logo Café Cajubá" />
          </ImageDiv>
          <ImageDiv>
            <img src={copagaz} alt="Logo Copagaz" />
          </ImageDiv>
          <ImageDiv>
            <img src={superGasBras} alt="Logo Super GásBras" />
          </ImageDiv>
          <ImageDiv>
            <img src={algar} alt="Logo Algar" />
          </ImageDiv>
          <ImageDiv>
            <img src={syngenta} alt="Logo Syngenta" />
          </ImageDiv>
          <ImageDiv>
            <img src={jbs} alt="Logo JBS" />
          </ImageDiv>
          <ImageDiv>
            <img src={cargill} alt="Logo Cargill" />
          </ImageDiv>
          <ImageDiv>
            <img src={cocaCola} alt="Logo Coca-Cola" />
          </ImageDiv>
          <ImageDiv>
            <img src={brf} alt="Logo BRF" />
          </ImageDiv>
          <ImageDiv>
            <img src={pifPaf} alt="Logo Pif-Paf" />
          </ImageDiv>
          <ImageDiv>
            <img src={paraTudo} alt="Logo Para Tudo Bebidas" />
          </ImageDiv>
          <ImageDiv>
            <img src={mataBoi} alt="Logo Mata Boi" />
          </ImageDiv>
        </Carousel>
      </Container>
    </Fade>
  );
};

export default ClientsCarousel;
