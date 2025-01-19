import { useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  handleInView: (index: number) => void;
  index: number;
};

const Container = ({ children, handleInView, index }: Props) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });

  useEffect(() => {
    if (isInView) handleInView(index);
  }, [isInView, index, handleInView]);

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
