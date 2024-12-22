import { useEffect, useState } from "react";
// Import Swiper React components
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules

import Image from "next/image";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import MainVideo from "./main-video";

interface VideoInfo {
  id: string;
  title: string;
}

export default function YoutubePlaylist() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  const [videoIds, setVideoIds] = useState<string[]>([]);
  const [thumbnails, setThumbnails] = useState<VideoInfo[]>([]);
  const apiKey = "AIzaSyAcQIUH2fJ40BUIzC1FpTIPHaeUuLDpMtw";
  const playlistId = "PLQEEZQOUQsQElnZgaGy4cNqZAKcxtdkpV";

  // Construa a URL da solicitação
  const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        // Fetch data from the YouTube Data API for the playlist
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract video IDs from the response
        const ids = data.items.map(
          (item: any) => item.snippet.resourceId.videoId
        );
        const thumbs = data.items.map((item: any) => ({
          id: item.snippet.thumbnails.default.url,
          title: item.snippet.title,
        }));
        setThumbnails(thumbs);
        setVideoIds(ids);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylist();
  }, [apiUrl]);

  return (
    <>
      <div className="flex items-center max-h-auto mt-20 lg:mt-[150px]">
        <Swiper
          direction="vertical"
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper max-h-[480px] cursor-grab overflow-auto"
        >
          {thumbnails.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col mb-2">
                <Image
                  key={item.id}
                  src={item.id}
                  width={160}
                  height={160}
                  alt="Car photo"
                />
                <span className="text-xs -mt-4">
                  {item.title.replace(/^SMVZAP - /, "")}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          style={{
            ["--swiper-navigation-color" as any]: "#fff",
            ["--swiper-pagination-color" as any]: "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {videoIds.map((item) => (
            <SwiperSlide key={item}>
              <MainVideo item={item} key={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
