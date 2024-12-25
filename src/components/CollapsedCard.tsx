import { motion } from "framer-motion";
import viking from "../assets/viking.jpg";

const CollapsedCard = ({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <motion.div
      layoutId="vikingcontainer"
      onClick={() => setIsOpen(true)}
      className="h-96 w-80 overflow-hidden rounded-lg relative z-30"
    >
      <motion.img
        layoutId="vikingimage"
        src={viking}
        alt="object-cover w-full h-full"
      />
      <motion.h2
        layoutId="vikingtitle"
        className="uppercase text-white z-20 absolute top-1 left-1 font-extrabold text-4xl leading-8"
      >
        Game of
        <br />
        the day
      </motion.h2>
      <motion.div
        layoutId="vikinggradient"
        className="absolute inset-0 bg-gradient-to-b from-black/35 to-transparent z-10 to-30%"
      />
    </motion.div>
  );
};
export default CollapsedCard;
