import Fade from "react-reveal/Fade";

import { Container, ImagesContainer } from "./styles";

import start from "../../assets/start.png";
import cajuba from "../../assets/cajuba.png";
import copagaz from "../../assets/copagaz.png";
import liquigas from "../../assets/liquigas.png";
import superGasBras from "../../assets/supergasbras.png";
import algar from "../../assets/algar.png";
import syngenta from "../../assets/syngenta.png";
import jbs from "../../assets/jbs.png";
import monsanto from "../../assets/monsanto.png";
import cargill from "../../assets/cargill.png";
import cocaCola from "../../assets/cocacola.png";
import brf from "../../assets/brf.png";
import pifPaf from "../../assets/pifpaf.png";
import italac from "../../assets/italac.png";

const Clients = () => {
  return (
    <Container>
      <Fade>
        <h1>NOSSOS CLIENTES</h1>
        <h2>Parceiros que confiam na gente</h2>
        <hr />
      </Fade>
      <Fade bottom>
        <ImagesContainer>
          <img src={start} alt="Logo da Start" />
          <img src={cajuba} alt="Logo da Café Cajubá" />
          <img src={copagaz} alt="Logo da Copagaz" />
          <img src={liquigas} alt="Logo da Liquigás" />
          <img src={superGasBras} alt="Logo da Super Gas Bras" />
          <img src={algar} alt="Logo da Algar" />
          <img src={syngenta} alt="Logo da Syngenta" />
          <img src={jbs} alt="Logo da JBS" />
          <img src={monsanto} alt="Logo da Monsanto" />
          <img src={cargill} alt="Logo da Cargill" />
          <img src={cocaCola} alt="Logo da Coca-Cola" />
          <img src={brf} alt="Logo da BRF" />
          <img src={pifPaf} alt="Logo da Pif-Paf Alimentos" />
          <img src={italac} alt="Logo da Italac" />
        </ImagesContainer>
      </Fade>
    </Container>
  );
};

export default Clients;
