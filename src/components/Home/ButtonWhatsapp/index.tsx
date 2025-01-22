import { BsWhatsapp } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import "./style.css";

function ButtonWhatsapp() {
  return (
      <a
        id="buttonWhatsapp"
        data-tooltip-content="Fale com a gente"
        aria-label="Botão de whatsapp"
        href="https://api.whatsapp.com/send?phone=5589994159560&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20um%20brinquedo."
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        style={{ whiteSpace: "nowrap" }}
      >
        <BsWhatsapp size={30} />
        <Tooltip anchorId="buttonWhatsapp" place="bottom" />
      </a>
  );
}

export default ButtonWhatsapp;
