import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isVisible: boolean;
  setSelectedGame: (index: number | null) => void;
};

const Backdrop = ({ isVisible, setSelectedGame }: Props) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, type: "tween" }}
          onClick={() => setSelectedGame(null)}
          className="bg-black/50 fixed inset-0 z-30"
        />
      )}
    </AnimatePresence>
  );
};
export default Backdrop;
