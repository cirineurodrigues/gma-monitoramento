import Fade from "react-reveal/Fade";

import { Container } from "./styles";

import Paralax from "../Paralax";

const About = () => {
  return (
    <>
      <Container>
        <Fade>
          <h1>Sobre Nós</h1>
          <h2>Cuidamos bem do Meio Ambiente</h2>
          <hr />
        </Fade>
        <Fade bottom>
          <p>
            A GMA - Gasques Monitoramento Ambiental é uma empresa privada que
            está no mercado desde 2003. Ano após ano, tem crescido o número de
            seus parceiros, graças a sua atuação no mercado e o profissionalismo
            de seus colaboradores.
          </p>
          <p>
            Nosso objetivo principal é realizar coletas e análises laboratoriais
            apresentando resultados confiáveis e soluções aplicáveis para
            mitigar impactos ambientais.
          </p>
          <p>
            Atendemos todos os requisitos das legislações nacionais e
            internacionais no que concerne ao cumprimento de condicionantes
            ambientais de seus parceiros.
          </p>
          <h3>
            Laboratório de Ensaio acreditado pela CGCRE de acordo com a ABNT NBR
            ISO IEC 17.025:2017, sob o número CRL 0520:{" "}
          </h3>
          <ul>
            <li>
              <a
                href="http://www.inmetro.gov.br/laboratorios/rble/detalhe_laboratorio.asp?nom_apelido=GMA"
                target="_blank"
                rel="noreferrer"
              >
                Verifique escopo da acreditação
              </a>
            </li>
          </ul>
        </Fade>
      </Container>
      <Fade bottom>
        <Paralax />
      </Fade>
    </>
  );
};

export default About;
