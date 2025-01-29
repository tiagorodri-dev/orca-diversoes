import { BsFillGeoAltFill, BsFillTelephoneFill, BsEnvelopeFill, BsWhatsapp, BsCursorFill,} from "react-icons/bs";
import "./style.css";

function Contact() {
  return (
    <div
      className="contact-section p-5 d-flex flex-column justify-content-center align-items-center"
      id="contato"
      data-aos="fade-down" data-aos-duration="2000"
    >
      <h1 className="fw-bold">Fale conosco</h1>
      <p className="text-center">
        Pelo canal de atendimento ao cliente estamos disponíveis para
        atendê-lo(a) da melhor forma
      </p>

      <div className="d-flex flex-column flex-md-row gap-5 w-100">
        <div className="d-flex flex-column align-items-md-center align-items-center justify-content-around w-100">
          <ul className="list-unstyled mt-4">
            <p className="text-center text-md-start">
              Entre em contato ou visite-nos.
            </p>
            <li className="mb-2 d-flex align-items-center justify-content-md-start justify-content-center">
              <BsFillTelephoneFill className="me-2" /> (89) 99415-9560
            </li>
            <li className="mb-2 d-flex align-items-center justify-content-md-start justify-content-center">
              <BsWhatsapp className="me-2" /> (89) 99415-9560
            </li>
            <li className="mb-2 d-flex align-items-center justify-content-md-start justify-content-center">
              <BsEnvelopeFill className="me-2" /> amiltonbrandao11@gmail.com
            </li>
            <li className="mb-2 d-flex align-items-center justify-content-md-start justify-content-center text-center">
              <BsFillGeoAltFill className="me-2" /> Rua Projetada Doze, 493 -
              Tiberão - Floriano, PI, 64.804-580
            </li>
            <li className="mt-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Rua+Projetada+Doze,+493+-+Tiberão+-+Floriano,+PI,+64804-580"
                className="btn btn-success text-uppercase d-flex align-items-center justify-content-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  whiteSpace: "nowrap",
                  backgroundColor: "#25D366",
                  border: "none",
                }}
              >
                <BsWhatsapp /> Fale conosco pelo WhatsApp
              </a>
            </li>

            <li className="mt-5">
              <h3 className="text-center">Como chegar?</h3>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Rua+Projetada+Doze,+493+-+Tiberão+-+Floriano,+PI,+64804-580"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary d-flex align-items-center justify-content-center gap-2 mt-2 text-center"
              >
                <BsCursorFill /> Ver rotas
              </a>
            </li>
          </ul>
        </div>

        <div className="map-container mt-4 w-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.9999999999995!2d-43.02499999999999!3d-6.771999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDYnMTIuOCJTIDQzwrAwMScyNC4wIlc!5e0!3m2!1sen!2sbr!4v1630000000000!5m2!1sen!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            title="Localização"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
