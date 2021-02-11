import { useHistory } from "react-router-dom";

import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import {
  StyledFooter,
  LinksContainer,
  FooterMenu,
  DevelopedBy,
} from "./styles";

const Footer = () => {
  const history = useHistory();
  const menuItems = ["HOME", "SOBRE", "SERVIÇOS", "CLIENTES", "CONTATO"];
  const paths = ["/", "/sobre", "/servicos", "/clientes", "/contato"];
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
          <a
            href="https://api.whatsapp.com/send?phone=553498985342&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoWhatsapp />
          </a>
        </LinksContainer>
        <FooterMenu>
          <ul>
            {menuItems.map((value, index) => (
              <li
                key={index}
                onClick={() => {
                  window.scroll({ top: 0 });
                  history.push(paths[index]);
                }}
              >
                {value}
              </li>
            ))}
          </ul>
        </FooterMenu>
        <h1>&copy; 2021 GMA - Todos os direitos reservados</h1>
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
