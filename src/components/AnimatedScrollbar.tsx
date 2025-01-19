import { motion } from "framer-motion";

type Props = {
  animationInView: number | null;
  length: number;
};

const AnimatedScrollbar = ({ animationInView, length }: Props) => {
  return (
    <>
      {Array.from({ length }, (_, index) => (
        <div
          key={index}
          className={`h-2 w-2 bg-gray-300 rounded-full cursor-pointer`}
        >
          {index === animationInView && (
            <motion.div
              layoutId="dot"
              className="h-3 w-3 bg-gray-600 rounded-full z-10"
            />
          )}
        </div>
      ))}
    </>
  );
};

export default AnimatedScrollbar;
