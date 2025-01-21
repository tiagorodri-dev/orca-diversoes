import {
  BsFillEnvelopeFill,
  BsFillGeoAltFill,
  BsTelephoneFill,
  BsWhatsapp,
} from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-md-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">
              Sobre nós
            </h5>
            <p>
              Somos uma empresa especializada no desenvolvimento de brinquedos
              personalizados e na criação de experiências inesquecíveis para
              crianças.
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">
              Links Úteis
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#quem-somos"
                  className="text-white text-decoration-none"
                >
                  Quem somos
                </a>
              </li>
              <li>
                <a
                  href="#nossos-servicos"
                  className="text-white text-decoration-none"
                >
                  Nossos serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white text-decoration-none">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-5 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">
              Contato
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
              Copyright &copy; {new Date().getFullYear()} Orca Diversões e
              Entretenimento. Todos os direitos reservados.
            </p>
            <p className="mb-0">CNPJ: 41.584.671/0001-24</p>
            <p className="mb-0">
              Desenvolvido por{" "}
              <a
                className="text-white text-decoration-none"
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
