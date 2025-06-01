import { useEffect, useState } from "react";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export default function useBreakpoint() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Set immediately on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const current =
    width === null
      ? null
      : width >= breakpoints.xl
      ? "xl"
      : width >= breakpoints.lg
      ? "lg"
      : width >= breakpoints.md
      ? "md"
      : width >= breakpoints.sm
      ? "sm"
      : "xs";

  return {
    isSm: current === "sm",
    isMd: current === "md",
    isLg: current === "lg",
    isXl: current === "xl",
    current,
    width,
  };
}
