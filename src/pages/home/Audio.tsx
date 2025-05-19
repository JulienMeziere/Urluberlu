import { useState, useRef, useEffect, useCallback } from "react";

import { SoundOff } from "../../icons/SoundOff";
import { SoundOn } from "../../icons/SoundOn";

import audioSrc from "../../assets/trouble.wav";

export function Audio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    function onWindowClick() {
      togglePlay();
    }

    window.addEventListener("click", onWindowClick);
    return () => {
      window.removeEventListener("click", onWindowClick);
    };
  }, [togglePlay]);

  return (
    <>
      <audio ref={audioRef} src={audioSrc} className="hidden" />
      <button
        className="absolute top-[16px] right-[16px] w-[50px] h-[50px] cursor-pointer p-[0px] !outline-none !border-none !bg-none"
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
      >
        {isPlaying ? (
          <SoundOn className="w-full h-full mix-blend-difference" />
        ) : (
          <SoundOff className="w-full h-full mix-blend-difference" />
        )}
      </button>
    </>
  );
}
