import React, { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ from = 0, to }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const node = nodeRef.current;
      if (!node) return;

      const controls = animate(from, to, {
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
        onUpdate(value) {
          node.textContent = Math.round(value).toString();
        }
      });

      return () => controls.stop();
    }
  }, [from, to, inView]);

  return <span ref={nodeRef}>{from}</span>;
}

export default AnimatedCounter;