import { AnimatePresence, motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { MouseEvent } from "react";

type Props = {
  images: { img: string; remove: boolean }[];
  handleClick: (e: MouseEvent<HTMLDivElement>, img: string) => void;
};

const ImageGrid = ({ images, handleClick }: Props) => {
  return (
    <>
      {images.map(({ img, remove }) => (
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", scale: 1.2 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          key={img}
          onClick={(e) => handleClick(e, img)}
          className="h-28 w-28 rounded-md overflow-hidden relative hover:scale-105 transition-transform duration-200 cursor-pointer"
        >
          <AnimatePresence>
            {remove ? (
              <Selected key="selected" />
            ) : (
              <Unselected key="unselected" />
            )}
          </AnimatePresence>
          <motion.img layoutId={`img-${img}`} src={img} />
        </motion.div>
      ))}
    </>
  );
};

export default ImageGrid;

const Selected = () => (
  <motion.div
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="absolute top-1 right-1 h-5 w-5 rounded-full bg-gradient-to-b from-blue-400 to-blue-500 flex items-center justify-center"
  >
    <FaCheck className="text-white text-[10px]" />
  </motion.div>
);

const Unselected = () => (
  <motion.div
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="absolute top-1 right-1 h-5 w-5 rounded-full border"
  />
);

const variants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0, transition: { duration: 0.15 } },
};
