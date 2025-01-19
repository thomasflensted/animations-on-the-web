import { motion } from "framer-motion";
import { ReactNode } from "react";
import { TrashBack, TrashFront } from "./TrashCanIcons";

const TrashCan = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute"
      >
        <TrashBack />
      </motion.div>
      {children}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0 }}
        className="absolute"
      >
        <TrashFront />
      </motion.div>
    </>
  );
};

export default TrashCan;

const variants = {
  initial: { scale: 1.2, filter: "blur(5px)", opacity: 0 },
  animate: { scale: 1, filter: "blur(0px)", opacity: 1 },
  exit: { scale: 1.2, filter: "blur(5px)", opacity: 0 },
};
