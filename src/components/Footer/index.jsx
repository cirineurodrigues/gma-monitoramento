import { useHistory } from "react-router-dom";

import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

import {
  StyledFooter,
  LinksContainer,
  FooterMenu,
  DevelopedBy,
} from "./styles";

const Footer = () => {
  const history = useHistory();
  const menuItems = ["Home", "Serviços", "Clientes", "Contato"];
  const paths = ["/", "/servicos", "/clientes", "/contato"];
  return (
    <>
      <StyledFooter>
        <LinksContainer>
          <a
            href="https://www.linkedin.com/company/gma---gasques-monitoramento-ambiental/about/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/gmamonitoramento/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
        </LinksContainer>
        <FooterMenu>
          <ul>
            {menuItems.map((value, index) => (
              <li key={index} onClick={() => history.push(paths[index])}>
                {value}
              </li>
            ))}
          </ul>
        </FooterMenu>
        <h1>&copy; 2015 GMA - Todos os direitos reservados</h1>
      </StyledFooter>
      <DevelopedBy>
        <h1>
          Desenvolvido com ❤️ por{" "}
          <a
            href="https://www.linkedin.com/in/cirineurodrigues/"
            target="_blank"
            rel="noreferrer"
          >
            Cirineu Rodrigues
          </a>
        </h1>
      </DevelopedBy>
    </>
  );
};

export default Footer;
