import OverlayVideo from "@/components/Other/OverlayVideo";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";

export default function MainVideo(idVideo: { item: string }) {
  const [reloadKey, setReloadKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    setReloadKey((prevKey) => prevKey + 1);
  }, [isPlaying]);

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 1.2 }}
      className="relative w-full shadow-zinc lg:h-[458px] border border-e-0 rounded-3xl border-opacity-50 border-zinc-700"
      onClick={togglePlay}
    >
      <YouTube
        videoId={idVideo.item}
        className={
          "w-full h-full my-auto border-none rounded-md border-zinc-800 shadow-md shadow-black/30"
        }
        iframeClassName={"w-full h-full aspect-video rounded-md"}
        opts={{
          playerVars: { autoplay: isPlaying ? 1 : 0 },
        }}
        onPlay={() => console.log("O vídeo começou a ser reproduzido.")}
        onPause={() => console.log("O vídeo foi pausado.")}
        key={reloadKey}
        ref={playerRef}
      />
      {/* <OverlayVideo isPlaying={isPlaying} /> */}
    </motion.div>
  );
}
