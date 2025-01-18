import { useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  onInView: (index: number) => void;
  index: number;
};

const Container = ({ children, onInView, index }: Props) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });

  useEffect(() => {
    if (isInView) {
      onInView(index);
    }
  }, [isInView, index, onInView]);

  return (
    <div
      ref={sectionRef}
      className="h-screen flex items-center justify-center border-b w-full snap-start"
    >
      {children}
    </div>
  );
};

export default Container;
