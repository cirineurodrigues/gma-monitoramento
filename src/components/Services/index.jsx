import Fade from "react-reveal/Fade";

import { Container, ServicesContainer } from "./styles";

import Service from "../../components/Service";

import particula from "../../assets/particula.png";
import ruido from "../../assets/ruido.png";
import ringelmann from "../../assets/ringelmann.png";
import licenciamento from "../../assets/licenciamento.png";

const Servicos = () => {
  return (
    <Container>
      <Fade>
        <h1>Nossos Serviços</h1>
        <h2>Proporcionamos inovação e ideias para atender você</h2>
        <hr />
      </Fade>
      <Fade bottom>
        <ServicesContainer>
          <Service
            title="Monitoramento de Eﬂuentes Atmosféricos"
            text={[
              "A GMA realiza amostragens isocinéticas e avaliações de emissões gasosas atmosféricas provenientes de fontes estacionárias (dutos e chaminés) de processos produtivos em concordância com órgãos ambientais nacionais e internacionais.",
            ]}
            list={[
              "Material Particulado (MP)",
              "Óxidos de Enxofre (SOx)",
              "Óxidos de Nitrogênio (NOx)",
              "Compostos Orgânicos Voláteis (VOC)",
              "Compostos Orgânicos Semi-Voláteis (SVOC)",
              "Dioxinas e Furanos (TeQ)",
              "Metais classes I, II e III",
              "Fluoretos, Cianetos e Cloretos",
            ]}
          />
          <Service
            title="Partículas Totais em Suspensão - (PTS)"
            text={[
              "A GMA utiliza Amostradores de Grande Volume (AGV) para determinar da concentração de Partículas Totais em Suspensão (PTS) no ar ambiente.",
              "Atende a metodologia ABNT NBR 9547:1997 e a Resolução CONAMA 491 de 2018.",
            ]}
            image={particula}
            alt="Aparelho de medição de particulas totais em suspenção"
            reverse
          />
          <Service
            title="Avaliação de Ruídos"
            text={[
              "A GMA segue os padrões da norma ABNT NBR 10.151:2019, que tratam da avaliação do ruído contínuo e externo as instalações do empreendimento visando o conforto da comunidade. Atende as legislações pertinentes em cada caso.",
            ]}
            image={ruido}
            alt="Aparelho de medição de ruídos"
          />
          <Service
            title="Escala Ringelmann"
            text={[
              "Determinar através da escala Ringelmann o grau de enegrecimento da fumaça de veículos ou chaminés. Utiliza-se um cartão de Índice de fumaça tipo Ringelmann reduzido, constituída de cinco padrões com variações uniformes de tonalidade entre o branco e o preto. Atende a metodologia ABNT NBR 6.016:1986, Portaria IBAMA 85 de 1996 para veículos movidos à diesel e CETESB L9.061 de janeiro de 1979 para enegrecimento da fumaça emitida por fontes estacionárias.",
            ]}
            image={ringelmann}
            alt="Escala de Ringelmann"
            reverse
          />
          <Service
            title="Licenciamento Ambiental"
            text={[
              "A GMA também atua com um escritório de consultoria, formalizando processos a serem licenciados e reunindo os dados requisitados para a elaboração do Licenciamento Ambiental.",
            ]}
            image={licenciamento}
            alt="Licenciamento Ambiental"
          />
        </ServicesContainer>
      </Fade>
    </Container>
  );
};

export default Servicos;
