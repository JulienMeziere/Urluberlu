import { useEffect, useMemo, useRef } from "react";

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    function onMouseMove(e: MouseEvent) {
      if (!ref.current) return;
      ref.current.style.top = `${e.clientY}px`;
      ref.current.style.left = `${e.clientX}px`;
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const isMobile = useMemo(
    () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
    []
  );

  if (isMobile) return null;
  return <div className="cursor pointer-events-none" ref={ref} />;
}
