import { BsWhatsapp } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Orca Diversões
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav gap-lg-4">
            <li className="nav-item text-uppercase">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item text-uppercase">
              <a className="nav-link" href="#">
                Quem somos
              </a>
            </li>
            <li className="nav-item text-uppercase">
              <a className="nav-link" href="#">
                Nossos serviços
              </a>
            </li>
            <li className="nav-item text-uppercase">
              <a className="nav-link" href="#">
                Contato
              </a>
            </li>
            <li className="nav-item text-uppercase d-lg-none">
              <a
                href="https://wa.me/SEU_NUMERO_DE_TELEFONE"
                className="btn btn-success d-flex align-items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ whiteSpace: 'nowrap' }}
              >
                <BsWhatsapp /> Solicitar um orçamento
              </a>
            </li>
          </ul>
        </div>
        <a
          href="https://wa.me/SEU_NUMERO_DE_TELEFONE"
          className="btn btn-success text-uppercase d-none d-lg-flex align-items-center gap-2 ms-lg-3"
          target="_blank"
          rel="noopener noreferrer"
          style={{ whiteSpace: 'nowrap' }}
        >
          <BsWhatsapp /> Solicitar um orçamento
        </a>
      </div>
    </nav>
  );
}

export default Navbar;