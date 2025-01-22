import { useState, useEffect } from "react";
import childrenone from "../../assets/children-one.webp";
import childrentwo from "../../assets/children-two.webp";
import childrenthree from "../../assets/children-three.webp";
import "./style.css";
import ButtonWhatsapp from "./ButtonWhatsapp";
// import { BsWhatsapp } from "react-icons/bs";

function Home() {
  const [title, setTitle] = useState("Desenvolvendo brinquedos de alta qualidade");

  useEffect(() => {
    const carouselElement = document.getElementById('carouselExampleControls');
    const handleSlide = (event: any) => {
      const activeIndex = event.to;
      switch (activeIndex) {
        case 0:
          setTitle("Desenvolvendo brinquedos de alta qualidade");
          break;
        case 1:
          setTitle("Criando experiências inesquecíveis");
          break;
        case 2:
          setTitle("Promovendo a diversão e alegria");
          break;
        default:
          setTitle("Desenvolvendo brinquedos de alta qualidade");
          break;
      }
    };

    carouselElement?.addEventListener('slid.bs.carousel', handleSlide);

    return () => {
      carouselElement?.removeEventListener('slid.bs.carousel', handleSlide);
    };
  }, [title]);

  return (
    <div className="content" id="home">
      <div className="content-image">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={childrenone} className="image" alt="Criança brincando em playground"/>
            </div>
            <div className="carousel-item">
              <img src={childrentwo} className="image" alt="Criança brincando em escorregador"/>
            </div>
            <div className="carousel-item">
              <img src={childrenthree} className="image" alt="Criança brincando em balanço" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
      </div>
      <div className="banner">
        <h1 className="title fw-bold">{title}</h1>
      </div>
      <ButtonWhatsapp />
    </div>
  );
}

export default Home;
