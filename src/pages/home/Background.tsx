import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef } from "react";

import animationData from "../../assets/background-animation.json";

export function Background() {
  const ref = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    ref.current?.setDirection(-1);
  }, []);

  return (
    <Lottie
      lottieRef={ref}
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100vmax",
        height: "100vmax",
        transform: "translate(-50%, -50%)",
        zIndex: -1,
      }}
    />
  );
}
