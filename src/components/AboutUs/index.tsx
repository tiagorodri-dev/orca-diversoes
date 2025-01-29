import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import logo from "../../assets/logo-orca.webp";
import "./style.css";
import { BsAwardFill, BsPuzzleFill } from "react-icons/bs";

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="about-us-section p-5 d-flex flex-column justify-content-center align-items-center"
      id="quem-somos"
    >
      <h1 className="text-center fw-bold">Conheça um pouco mais sobre nós</h1>
      <div className="d-flex flex-column flex-md-row align-items-center gap-3 gap-5 mt-4">
        <img
          className="d-block"
          src={logo}
          alt="Logo Orca Diversões"
          width={200}
        />
        <p className="paragraph">
          Somos a Orca Diversões e Entretenimento, uma empresa especializada no
          desenvolvimento de brinquedos personalizados e na criação de
          experiências inesquecíveis para crianças e estamos localizados em Floriano, PI.
          Com mais de 27 anos de atuação no mercado de cenografia e
          entretenimento, nos destacamos pela nossa paixão em transformar ideias
          criativas em realidade. <br />
          <br />
          Ao longo de nossa trajetória, já desenvolvemos mais de 78 brinquedos
          personalizados, sempre prezando pela qualidade, segurança e inovação.
          Cada projeto é pensado para atender às necessidades e expectativas de
          nossos clientes, garantindo que cada peça seja única, funcional e
          visualmente encantadora. Nosso objetivo é proporcionar momentos de
          diversão, estimulando a imaginação e criando memórias marcantes.{" "}
          <br />
          <br />
          Nosso compromisso vai além da entrega de brinquedos. Investimos em
          tecnologia de ponta, materiais de alta qualidade e uma equipe
          talentosa que combina habilidade artesanal com design moderno.
          Trabalhamos com cenografia para eventos, playgrounds temáticos,
          brinquedos educativos e muito mais, sempre adaptando nossos serviços
          às tendências e demandas do mercado.
        </p>
      </div>

      <div
        ref={sectionRef}
        className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5 "
      >
        {isVisible && (
          <div className="experience-box text-center d-flex align-items-center flex-wrap justify-content-center gap-3 mt-4">
            <div className="countup d-flex flex-column align-items-center justify-content-center">
              <BsAwardFill size={42} className="mb-2" />
              <span>
                + <CountUp end={27} duration={14.5} /> anos de experiência no
                mercado
              </span>
            </div>
            <div className="countup d-flex flex-column align-items-center justify-content-center">
              <BsPuzzleFill size={42} className="mb-2" />
              <span>
                + <CountUp end={78} duration={15} /> brinquedos desenvolvidos e
                entregues
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutUs;
