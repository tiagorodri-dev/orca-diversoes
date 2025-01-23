import { BsBoxSeam, BsHouseDoor, BsPuzzle, BsWhatsapp } from "react-icons/bs";
import imgOne from "../../assets/img-orca1.jpg";
import imgTwo from "../../assets/img-orca2.jpg";
import imgThree from "../../assets/img-orca3.jpg";
import "./style.css";

function OurServices() {
  return (
    <div
      className="p-5 d-flex flex-column justify-content-center align-items-center"
      id="nossos-servicos"
      style={{ backgroundColor: "#464E50", color: "#FFFFFF" }}
    >
      <h1 className="fw-bold">Nossos serviços</h1>

      <div className="cards d-flex flex-wrap gap-3 gap-md-5 justify-content-center mt-4">
        <div className="card d-flex flex-column align-items-center p-2" style={{ width: "20rem" }}>
          <BsPuzzle size={42} className="mt-3" />
          <div className="card-body">
            <h5 className="card-title text-center fw-bolder">Fabricação de brinquedos infantis</h5>
            <p className="card-text" style={{ textAlign: "justify" }}>
              Desenvolvemos brinquedos infantis de alta qualidade e segurança para promover a diversão e o aprendizado das crianças. Com materiais resistentes e designs inovadores, nossos brinquedos são projetados para estimular a imaginação, a criatividade e o desenvolvimento motor.
            </p>
          </div>
        </div>

        <div className="card d-flex flex-column align-items-center p-2" style={{ width: "20rem" }}>
          <BsBoxSeam size={42} className="mt-3" />
          <div className="card-body">
            <h5 className="card-title text-center fw-bolder">Móveis infantis personalizados</h5>
            <p className="card-text" style={{ textAlign: "justify" }}>
              Criamos móveis infantis exclusivos e funcionais, que atendem às necessidades do seu pequeno. Com design inovador e materiais de alta durabilidade, nossos móveis são projetados para otimizar o espaço e proporcionar conforto, tudo com um toque único que combina com a personalidade do seu filho.
            </p>
          </div>
        </div>

        <div className="card d-flex flex-column align-items-center p-2" style={{ width: "20rem" }}>
        <BsHouseDoor size={42} className="mt-3" />
          <div className="card-body">
            <h5 className="card-title text-center fw-bolder">Brinquedoteca</h5>
            <p className="card-text" style={{ textAlign: "justify" }}>
              Nossa Brinquedoteca é um espaço lúdico e seguro, projetado para estimular a criatividade e o desenvolvimento das crianças. Equipado com brinquedos educativos e interativos, é o lugar perfeito para os pequenos se divertirem e aprenderem ao mesmo tempo.
            </p>
          </div>
        </div>
      </div>

      <div className="budget m-4">
        <a
          href="https://api.whatsapp.com/send?phone=5589994159560&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20um%20brinquedo."
          className="btn btn-success text-uppercase d-flex align-items-center gap-2 smooth-scale-effect"
          target="_blank"
          rel="noopener noreferrer"
          style={{ whiteSpace: "nowrap", backgroundColor: "#25D366" }}
        >
          <BsWhatsapp /> Solicitar um orçamento
        </a>
      </div>

      <h4 className="mt-5">Veja um pouco mais do nosso trabalho</h4>

      <div className="media-gallery d-flex flex-wrap gap-3 justify-content-center mt-4">
        <div className="images-gallery d-flex flex-wrap gap-3 justify-content-center">
          <div className="media-item">
            <img src={imgOne} alt="Trabalho da empresa 1" className="img-fluid" />
          </div>
          <div className="media-item">
            <img src={imgTwo} alt="Trabalho da empresa 2" className="img-fluid" />
          </div>
          <div className="media-item">
            <img src={imgThree} alt="Trabalho da empresa 3" className="img-fluid" />
          </div>
        </div>
        <div className="videos-gallery d-flex flex-wrap gap-3 justify-content-center">
          <div className="media-item">
            <video controls className="img-fluid">
              <source src="path/to/video1.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
          <div className="media-item">
            <video controls className="img-fluid">
              <source src="path/to/video2.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
