
import logo from "../../assets/logo-orca.webp";
import "./style.css";

function AboutUs() {
  return (
    <div className="p-5 d-flex flex-column justify-content-center align-items-center" id="quem-somos">
      <h1 className="text-center fw-bold">Conheça um pouco mais sobre nós</h1>
      <div className="d-flex flex-column flex-md-row align-items-center gap-3 gap-5 mt-4">
        <img className="d-block" src={logo} alt="Logo Orca Diversões" width={200} />
        <p className="paragraph" style={{color: "#7A7A7A"}}>
            Somos a Orca Diversões e Entretenimento, uma empresa localizada em Floriano, PI, especializada no desenvolvimento de brinquedos personalizados e na criação de experiências inesquecíveis para crianças. Com mais de X anos de atuação no mercado de cenografia e entretenimento, nos destacamos pela nossa paixão em transformar ideias criativas em realidade. <br/><br/>
            Ao longo de nossa trajetória, já desenvolvemos [insira número] brinquedos personalizados, sempre prezando pela qualidade, segurança e inovação. Cada projeto é pensado para atender às necessidades e expectativas de nossos clientes, garantindo que cada peça seja única, funcional e visualmente encantadora. Nosso objetivo é proporcionar momentos de diversão, estimulando a imaginação e criando memórias marcantes. <br/><br/>
            Nosso compromisso vai além da entrega de brinquedos. Investimos em tecnologia de ponta, materiais de alta qualidade e uma equipe talentosa que combina habilidade artesanal com design moderno. Trabalhamos com cenografia para eventos, playgrounds temáticos, brinquedos educativos e muito mais, sempre adaptando nossos serviços às tendências e demandas do mercado.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
