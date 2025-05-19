import { Background } from "./Background";
import { Audio } from "./Audio";

import mainImage from "../../assets/urluberlu.png";
import { Cursor } from "./Cursor";

export function Home() {
  return (
    <div className="relative flex w-full h-screen overflow-hidden cursor-none">
      <Background />
      <a
        className="animated-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] max-h-[90svh]"
        href="https://open.spotify.com/artist/6Nok8PZpbhaySl2vhZXSui"
      >
        <img
          src={mainImage}
          alt="Urluberlu"
          className="object-contain [mask-image:radial-gradient(ellipse_at_center,black_80%,transparent_100%)] animated w-full h-full"
        />
      </a>
      <h1 className="hidden">Urluberlu</h1>
      <Audio />
      <Cursor />
    </div>
  );
}
