import Slider from "react-slick";
import ServiceCard from "../../components/common/serviceCard";
import { customerServices } from "../../services/fakecustomerservices";
import { SectionHeader, ImgContainer } from "../../styles/homeTheme";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div id="services">
      <SectionHeader variant="h3" color="secondary">
        Services
      </SectionHeader>

      <ImgContainer>
        <Slider {...settings}>
          {customerServices.map((service) => (
            <div key={service.id}>
              <ServiceCard
                data={service}
                actionpath="servicedetail"
                buttonpath="bookingdetail"
              />
            </div>
          ))}
        </Slider>
      </ImgContainer>
    </div>
  );
};

export default ImageSlider;
