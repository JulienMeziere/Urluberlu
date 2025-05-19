export function Footer() {
  return (
    <div
      className="absolute bottom-[0px] right-[0px] h-[30px] text-[white] p-[16px]"
      style={{ mixBlendMode: "difference" }}
    >
      <a href="/terms-of-service">Terms of Service</a> |{" "}
      <a href="/privacy-policy">Privacy Policy</a>
    </div>
  );
}
