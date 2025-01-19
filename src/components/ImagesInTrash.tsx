import { RiResetLeftFill } from "react-icons/ri";
import { motion } from "framer-motion";
import TrashCan from "./TrashCan";

type Props = {
  imagesToRemove: string[];
  reset: () => void;
};

const ImagesInTrash = ({ imagesToRemove, reset }: Props) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center ">
      <motion.div
        onClick={reset}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.25 }}
        className="p-2 border rounded-full absolute top-40 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <RiResetLeftFill />
      </motion.div>
      <TrashCan>
        <motion.div
          animate={{ y: 75 }}
          transition={{
            delay: 0.25,
            duration: 0.25,
            type: "spring",
          }}
          className="h-40 w-40 flex items-center justify-center relative"
        >
          {imagesToRemove.map((img, index) => (
            <div key={img} className="absolute -top-16">
              <motion.img
                layoutId={`img-${img}`}
                src={img}
                height={70}
                width={70}
                style={{ rotate: index % 2 === 0 ? -5 + index : 5 + index }}
                className="rounded-md"
              />
            </div>
          ))}
        </motion.div>
      </TrashCan>
    </div>
  );
};

export default ImagesInTrash;
