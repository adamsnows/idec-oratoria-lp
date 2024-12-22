import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { useState } from "react";
import { Services } from "./content";

SwiperCore.use([Autoplay, FreeMode, Pagination]);

const ServiceSlider = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>("funnel");
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <div className="flex flex-col gap-2">
        {Object.entries(Services).map(([serviceKey, serviceValue]) => {
          return (
            <button
              key={serviceKey}
              onClick={() => setSelectedFeature(serviceKey)}
              data-selected={serviceKey == selectedFeature}
              className="bg-white/10 w-full h-full flex gap-2 p-4 items-center hover:bg-black whitespace-nowrap data-[selected=true]:bg-accent data-[selected=true]:text-black data-[selected=true]:hover:bg-accent transition-all duration-200"
            >
              {serviceValue.icon} {serviceValue.label}
            </button>
          );
        })}
      </div>
      <div className="bg-white/10 w-full h-[500px] flex flex-col gap-2 p-6 items-center">
        {Services[selectedFeature]?.component}
      </div>
    </div>
  );
};

export default ServiceSlider;
