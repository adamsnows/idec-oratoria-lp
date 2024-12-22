"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FourthSection = () => {
  const unidades = [
    {
      name: "ALPHAVILLE, SÃO PAULO",
      address: [
        "Av. Marcos Penteado de Ulhoa Rodrigues, 1119",
        "Office Shopping Tamboré, andar 21",
      ],
      images: [
        "/unidades/alphvl_1.jpg",
        "/unidades/alphvl_2.jpg",
        "/unidades/alphvl_3.jpg",
      ],
    },
    {
      name: "LISBOA, PORTUGAL",
      address: ["Campo dos Mártires da Pátria 37,", "1169-016"],
      images: [
        "/unidades/lsb_1.jpg",
        "/unidades/lsb_2.jpg",
        "/unidades/lsb_3.jpg",
      ],
    },
    {
      name: "MARINGÁ, PARANÁ",
      address: ["R. Néo Alves Martins, 2789"],
      images: [
        "/unidades/mrng_1.jpg",
        "/unidades/mrng_2.jpg",
        "/unidades/mrng_3.jpg",
      ],
    },
    {
      name: "SALVADOR, BAHIA",
      address: [
        "Hotel Intercity Salvador Aeroporto,",
        "da Estrada do Coco 1,5, Av. Santos Dumont, 1883",
      ],
      images: [
        "/unidades/slvdr_1.jpg",
        "/unidades/slvdr_2.jpg",
        "/unidades/slvdr_3.jpg",
      ],
    },
  ];

  return (
    <div
      className="relative w-full tracking-widest bg-accent min-h-[1000px] text-black py-[100px]"
      id="unity"
    >
      <div className="container z-[10] pt-20">
        {/* <div className="border-black w-full mb-3 border-b-2 -ms-10" /> */}
        <span className="text-4xl font-ltWave">NOSSAS UNIDADES</span>
      </div>
      <div className="container mx-auto mt-14 z-[20]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 z-[10] justify-items-center gap-y-[100px]">
          {unidades.map((unidade, index) => (
            <div
              key={index}
              className="h-[300px] w-full cursor-pointer relative z-[10]"
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                // autoplay={{ delay: 5000 }}
                className="h-[300px] w-full"
              >
                {unidade.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={image}
                      alt={`Slide ${idx + 1}`}
                      className="w-full object-cover mb-5 rounded-md"
                      style={{ height: "auto", maxHeight: "300px" }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex flex-col font-ltWave lg:mt-4">
                <span className="text-2xl">{unidade.name}</span>
                <div className="flex flex-col font-amsi">
                  {unidade.address.map((line, idx) => (
                    <span key={idx} className="text-xs">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
