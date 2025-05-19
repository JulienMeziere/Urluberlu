import logo from "../assets/logo.png";

export function Header() {
  return (
    <div className="absolute top-[0px] left-[0px] p-[16px]">
      <a href="/">
        <img
          alt="Urluberlu"
          src={logo}
          className="h-[75px] transition-all duration-100 ease-in-out hover:scale-130 hover:rotate-360 active:scale-130 active:rotate-360"
        />
      </a>
    </div>
  );
}
