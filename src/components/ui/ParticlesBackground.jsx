import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Particles } from "@/components/ui/particles";

export const ParticlesBackground = () => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#a1a1a1");
  }, [resolvedTheme]);

  return (
    <Particles
      className="absolute inset-0 z-0"
      quantity={400}
      ease={15}
      color={color}
      refresh
    />
  );
};