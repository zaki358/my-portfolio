import { useState, useEffect } from "react";

export const useSound = (soundFile: string) => {
  const [audio] = useState<HTMLAudioElement>(new Audio(soundFile));

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const playSound = async (play: boolean = true) => {
    try {
      if (play) await audio.play();
      else audio.pause();
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  return { playSound };
};
