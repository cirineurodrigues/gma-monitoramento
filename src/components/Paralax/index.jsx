import { FaQuoteRight } from "react-icons/fa";

import { StyledParalax } from "./styles";

const Paralax = () => {
  return (
    <StyledParalax>
      <h1>
        Mais que criar uma imagem boa das empresas, o monitoramento é um dever
        corporativo que visa melhores condições para o meio ambiente.
      </h1>
      <FaQuoteRight />
      <h2>Maurício Gasques, CEO</h2>
    </StyledParalax>
  );
};

export default Paralax;
