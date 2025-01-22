import { BsFillEnvelopeFill, BsFillGeoAltFill, BsTelephoneFill, BsWhatsapp, } from "react-icons/bs";
import "./style.css";

function Footer() {

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer text-black pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-md-5 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold">
              Sobre nós
            </h5>
            <p>
              Somos uma empresa especializada no desenvolvimento de brinquedos
              personalizados e na criação de experiências inesquecíveis para
              crianças.
            </p>
          </div>

          <div className="col-md-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold">
              Links Úteis
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-black text-decoration-none" onClick={(e) => handleNavClick(e, 'home')}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-decoration-none"
                  onClick={(e) => handleNavClick(e, 'quem-somos')}
                >
                  Quem somos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-decoration-none"
                  onClick={(e) => handleNavClick(e, 'nossos-servicos')}
                >
                  Nossos serviços
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-decoration-none" onClick={(e) => handleNavClick(e, 'contato')}>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-5 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold">
              Mais informações
            </h5>
            <ul className="list-unstyled">
              <li>
                <BsTelephoneFill className="me-2" /> Telefone: (89) 99415-9560
              </li>
              <li>
                <BsWhatsapp className="me-2" /> Whatsapp: (89) 99415-9560
              </li>
              <li>
                <BsFillEnvelopeFill className="me-2" /> E-mail:
                amiltonbrandao11@gmail.com
              </li>
              <li>
                <BsFillGeoAltFill className="me-2" /> Endereço: Avenida Senador
                Dirceu Arcoverde, 1965 - Irapuá II <br /> Floriano, PI,
                64.800-430
              </li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center align-items-center mt-4">
          <div className="col-md-7 col-lg-8 text-center">
            <p className="mb-0">
            Orca Diversões e Entretenimento &copy; {new Date().getFullYear()} - Todos os direitos reservados.
            </p>
            <p className="mb-0">CNPJ: 41.584.671/0001-24</p>
            <p className="mb-0">
              Desenvolvido por{" "}
              <a
                className="text-black text-decoration-none"
                href="https://tiagorodrigues.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tiago Rodrigues
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
