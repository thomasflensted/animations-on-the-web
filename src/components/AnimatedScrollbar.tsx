import { motion } from "framer-motion";

type Props = {
  animationInView: number | null;
  length: number;
};

const AnimatedScrollbar = ({ animationInView, length }: Props) => {
  return (
    <>
      {Array.from({ length }, (_, index) => (
        <div key={index} className={`h-2 w-2 bg-gray-300 rounded-full`}>
          {index === animationInView && (
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              style={{ transformOrigin: "center" }}
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
