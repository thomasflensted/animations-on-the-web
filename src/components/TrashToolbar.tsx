import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { MouseEvent } from "react";

type Props = {
  images: { img: string; remove: boolean }[];
  hasSelectionFn: (img: { img: string; remove: boolean }) => boolean;
  handleNextStep: (e: MouseEvent<HTMLDivElement>) => void;
};

const TrashToolbar = ({ images, hasSelectionFn, handleNextStep }: Props) => {
  return (
    <div className="absolute -bottom-20 w-full flex justify-center">
      <AnimatePresence>
        {images.some(hasSelectionFn) && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0 }}
            className="border rounded-lg shadow p-1 flex gap-1 w-min"
          >
            <div className="w-12 aspect-square bg-gray-50 flex flex-col items-center justify-center">
              <FaArrowLeft className="text-sm text-gray-400" />
            </div>
            <div
              onClick={(e) => handleNextStep(e)}
              className="w-12 aspect-square bg-gray-50 flex flex-col items-center justify-center group cursor-pointer"
            >
              <FaTrash className="text-sm text-gray-400 group-hover:text-red-500 transition-colors duration-200" />
            </div>
            <div className="w-12 aspect-square bg-gray-50 flex flex-col items-center justify-center">
              <IoIosWarning className="text-md text-gray-400" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default TrashToolbar;
