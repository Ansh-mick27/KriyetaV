import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const logos = [
  { id: 1, src: "/logos/acropolis.png", hoverPos: { x: "-35vw", y: "-20vh" } },
  { id: 2, src: "/logos/aiml.png", hoverPos: { x: "35vw", y: "-20vh" } },
  { id: 3, src: "/logos/ieee-sb.png", hoverPos: { x: "-35vw", y: "20vh" } },
  { id: 4, src: "/logos/ieee.jpg", hoverPos: { x: "35vw", y: "20vh" }, mixBlend: true },
];

export function BouncingLogos({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
      {logos.map((logo) => (
        <BouncingLogo key={logo.id} logo={logo} isHovered={isHovered} />
      ))}
    </div>
  );
}

function BouncingLogo({ logo, isHovered }: { logo: any; isHovered: boolean }) {
  const controls = useAnimation();
  const isActive = useRef(false);

  useEffect(() => {
    isActive.current = true;

    const bounce = async () => {
      // If we are hovering, do not apply random bounces
      if (!isHovered && isActive.current) {
        // We use viewport units relative to the container center
        await controls.start({
          x: `${(Math.random() - 0.5) * 60}vw`,
          y: `${(Math.random() - 0.5) * 60}vh`,
          opacity: 0.3,
          scale: 1,
          transition: { duration: 3 + Math.random() * 2, ease: "easeInOut" }
        });
        
        // After one animation sequence, call bounce again if still not hovered
        if (isActive.current && !isHovered) {
          bounce();
        }
      }
    };

    if (isHovered) {
      // 1. Stop the current random bouncing
      isActive.current = false;
      controls.stop();
      
      // 2. Animate directly to the fixed position
      controls.start({
        x: logo.hoverPos.x,
        y: logo.hoverPos.y,
        opacity: 1,
        scale: 1.1,
        transition: { duration: 0.8, type: "spring", bounce: 0.3 }
      });
    } else {
      // Start the bouncing
      isActive.current = true;
      bounce();
    }

    return () => {
      isActive.current = false;
      controls.stop();
    };
  }, [isHovered, controls, logo.hoverPos.x, logo.hoverPos.y]);

  return (
    <motion.img
      src={logo.src}
      animate={controls}
      style={{ imageRendering: "auto" }}
      className={`absolute w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] ${
        logo.mixBlend ? "mix-blend-multiply" : ""
      }`}
    />
  );
}
