import Fade from "react-reveal/Fade";
import { FaGlobeAmericas, FaLeaf } from "react-icons/fa";
import { SiAudiomack } from "react-icons/si";
import { useHistory } from "react-router-dom";

import { Container, CardsContainer, ButtonContainer } from "./styles";

import Card from "../Card";

const Empresa = () => {
  const history = useHistory();
  return (
    <Container>
      <Fade>
        <h1>A Empresa</h1>
        <h2>Proporcionamos inovação e ideias para atender você</h2>
        <hr />
        <p>
          No mercado desde 2003, a GMA - Gasques Monitoramento Ambiental tem
          crescido o número de seus parceiros, graças a sua atuação no mercado e
          o profissionalismo de seus colaboradores. Somos uma empresa privada,
          cujo objetivo principal é realizar coletas e análises laboratoriais
          apresentando resultados confiáveis e soluções aplicáveis para mitigar
          impactos ambientais. Atendemos os requisitos das legislações nacionais
          e internacionais no que concerne ao cumprimento de condicionantes
          ambientais de seus parceiros. Contamos com um departamento comercial
          que prisma pelo atendimento completo e mais adequado, buscando
          identificar e atender às suas necessidades e orientando-os com todas
          as informações necessárias sobre os serviços disponíveis, de forma a
          superar suas expectativas na avaliação de impactos para o
          monitoramento ambiental.
        </p>
        <Fade bottom>
          <CardsContainer>
            <Card
              title="Monitoramento Atmosférico"
              text="A GMA realiza amostragens e avaliações de emissões gasosas atmosféricas provenientes de fontes estacionárias em concordância com órgãos ambientais nacionais e internacionais."
            >
              <FaGlobeAmericas />
            </Card>
            <Card
              title="Avaliação de Ruídos"
              text="A GMA fixa as condições exigíveis, seguindo os padrões da norma NBR 10151(2000) que trata da Avaliação do Ruído ao meio ambiente, ou as legislações pertinentes em cada caso."
            >
              <SiAudiomack />
            </Card>
            <Card
              title="Licenciamento Ambiental"
              text="A GMA também atua com um escritório de consultoria, formalizando processos a serem licenciados e reunindo os dados requisitados para a elaboração do Licenciamento Ambiental."
            >
              <FaLeaf />
            </Card>
          </CardsContainer>
        </Fade>
        <ButtonContainer>
          <button onClick={() => history.push("/servicos")}>
            Nossos Serviços
          </button>
        </ButtonContainer>
      </Fade>
    </Container>
  );
};

export default Empresa;
