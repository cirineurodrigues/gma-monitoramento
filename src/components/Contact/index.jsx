import Fade from "react-reveal/Fade";

import { Container, ContactContent } from "./styles";

import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";

import logo from "../../assets/logo.png";

const Contact = () => {
  return (
    <Container>
      <Fade>
        <h1>Contato</h1>
        <h2>Entre em contato conosco</h2>
        <hr />
      </Fade>
      <Fade bottom>
        <ContactContent>
          <img src={logo} alt="Logo da GMA" />
          <ul>
            <li>
              <a
                href="https://www.google.com.br/maps/search/R.+Rio+Grande+do+Norte,+2434+-+Umuarama,+Uberl%C3%A2ndia+-+MG/@-18.8840283,-48.2641454,19.75z"
                target="_blank"
                rel="noreferrer"
              >
                <GoLocation className="icon" /> R. Rio Grande do Norte, 2434 -
                Umuarama, Uberlândia - MG
              </a>
            </li>
            <li>
              <a href="tel:(34)3232-9757">
                <AiOutlinePhone className="icon" /> (34) 3232-9757
              </a>
            </li>
            <li>
              <a href="mailto:comercial@gasques.com.br">
                <AiOutlineMail className="icon" /> comercial@gasques.com.br
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=553498985342&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineWhatsApp className="icon" /> (34) 9898-5342
              </a>
            </li>
          </ul>
          <iframe
            title="Mapa"
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d943.7672026256492!2d-48.2641454!3d-18.8840283!3m2!1i1024!2i768!4f13.1!2m1!1sR.%20Rio%20Grande%20do%20Norte%2C%202434%20-%20Umuarama%2C%20Uberl%C3%A2ndia%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1612745053478!5m2!1spt-BR!2sbr"
            frameborder="0"
            style={{ width: "100%", height: "300px", border: "0" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </ContactContent>
      </Fade>
    </Container>
  );
};

export default Contact;
