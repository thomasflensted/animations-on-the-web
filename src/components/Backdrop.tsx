import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isVisible: boolean;
  onClick: () => void;
};

const Backdrop = ({ isVisible, onClick }: Props) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, type: "tween" }}
          onClick={onClick}
          className="bg-black/50 fixed inset-0 z-30"
        />
      )}
    </AnimatePresence>
  );
};
export default Backdrop;
