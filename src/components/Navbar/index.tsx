import logo from "../../assets/logo-orca.webp";
import { BsWhatsapp } from "react-icons/bs";
import "./style.css";

function Navbar() {
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src={logo} alt="Logo Orca Diversões e Entretenimento" width={30} />
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
              <a className="nav-link" aria-current="page" href="#" onClick={(e) => handleNavClick(e, 'home')}>
                Home
              </a>
            </li>
            <li className="nav-item text-uppercase">
              <a className="nav-link" href="#" onClick={(e) => handleNavClick(e, 'quem-somos')}>
                Quem somos
              </a>
            </li>
            <li className="nav-item text-uppercase">
              <a className="nav-link" href="#" onClick={(e) => handleNavClick(e, 'nossos-servicos')}>
                Nossos serviços
              </a>
            </li>
            <li className="nav-item text-uppercase">
              <a className="nav-link" href="#" onClick={(e) => handleNavClick(e, 'contato')}>
                Contato
              </a>
            </li>
            <li className="nav-item text-uppercase d-lg-none">
              <a
                href="https://api.whatsapp.com/send?phone=5589994159560&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20um%20brinquedo."
                className="btn btn-success d-flex align-items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ whiteSpace: 'nowrap', backgroundColor: "#25D366", border: "none" }}
              >
                <BsWhatsapp /> Solicitar um orçamento
              </a>
            </li>
          </ul>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=5589994159560&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20um%20brinquedo."
          className="btn btn-success text-uppercase d-none d-lg-flex align-items-center gap-2 ms-lg-3"
          target="_blank"
          rel="noopener noreferrer"
          style={{ whiteSpace: 'nowrap', backgroundColor: "#25D366", border: "none" }}
        >
          <BsWhatsapp /> Solicitar um orçamento
        </a>
      </div>
    </nav>
  );
}

export default Navbar;