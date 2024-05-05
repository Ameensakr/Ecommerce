import Image1 from './Images/image-1.jpeg';
import './Slider.css';

function Slider() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Image1} className="d-block w-100 height-500" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
