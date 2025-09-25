import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImage from "../../../assets/home/banner/banner.jpg";
import bannerImage2 from "../../../assets/home/banner/banner2.jpg";
import bannerImage3 from "../../../assets/home/banner/banner3.jpg";
import bannerImage4 from "../../../assets/home/banner/banner4.jpg";
import bannerImage5 from "../../../assets/home/banner/banner5.jpg";
import bannerImage6 from "../../../assets/home/banner/banner6.jpg";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} interval={1000}>
        <div><img className="w-full h-[700px] object-cover" src={bannerImage} /></div>
        <div><img className="w-full h-[700px] object-cover" src={bannerImage2} /></div>
        <div><img className="w-full h-[700px] object-cover" src={bannerImage3} /></div>
        <div><img className="w-full h-[700px] object-cover" src={bannerImage4} /></div>
        <div><img className="w-full h-[700px] object-cover" src={bannerImage5} /></div>
        <div><img className="w-full h-[700px] object-cover" src={bannerImage6} /></div>
    </Carousel>
  );
};

export default Banner;
