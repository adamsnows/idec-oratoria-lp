import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { RiDoubleQuotesL } from "react-icons/ri";
import SwiperCore from "swiper";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

SwiperCore.use([Autoplay, FreeMode, Pagination]);

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation] as any}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="h-full"
      loop
    ></Swiper>
  );
};

export default TestimonialSlider;
