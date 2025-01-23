import React from "react";
import {
  BsFillGeoAltFill,
  BsFillTelephoneFill,
  BsEnvelopeFill,
  BsWhatsapp,
} from "react-icons/bs";
import "./style.css";

function Contact() {
  return (
    <div
      className="contact-section p-5 d-flex flex-column justify-content-center align-items-center"
      id="contato"
    >
      <h1 className="fw-bold">Fale conosco</h1>
      <p>
        Pelo canal de atendimento ao cliente estamos disponíveis para
        atendê-lo(a) da melhor forma
      </p>

      <div className="d-flex flex-column justify-content-center flex-md-row gap-5 w-100">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <ul className="list-unstyled mt-4">
            <li className="mb-2 d-flex align-items-center">
              <BsFillTelephoneFill className="me-2" /> (89) 99415-9560
            </li>
            <li className="mb-2 d-flex align-items-center">
              <BsWhatsapp className="me-2" /> (89) 99415-9560
            </li>
            <li className="mb-2 d-flex align-items-center">
              <BsEnvelopeFill className="me-2" />  amiltonbrandao11@gmail.com
            </li>
            <li className="mb-2 d-flex align-items-center">
              <BsFillGeoAltFill className="me-2" /> Avenida Senador Dirceu
              Arcoverde, 1965 - Irapuá II <br /> Floriano, PI, 64.800-430
            </li>
            <li className="budget mt-4 d-flex align-items-center">
              <a
                href="https://api.whatsapp.com/send?phone=5589994159560&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20um%20brinquedo."
                className="btn btn-success text-uppercase d-flex align-items-center"
                target="_blank"
                rel="noopener noreferrer"
                style={{ whiteSpace: "nowrap", border: "none" }}
              >
                <BsWhatsapp /> Fale conosco pelo WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="map-container mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.9789453236394!2d-43.03981722976315!3d-6.772416551227565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7837d23e7732c75%3A0x53160cef767d3d47!2sAv.%20Sen.%20Dirceu%20Arco-Verde%2C%201965%20-%20Irapu%C3%A3%20I%2C%20Floriano%20-%20PI%2C%2064800-000!5e0!3m2!1spt-PT!2sbr!4v1737647750564!5m2!1spt-PT!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Localização"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
