import { Dispatch, SetStateAction } from "react";
import { Game } from "../animations/GamesAnimation";
import { motion } from "framer-motion";

type Props = {
  setSelectedGame: Dispatch<SetStateAction<number | null>>;
  game: Game;
};

const GameModal = ({ game }: Props) => {
  const { name, description, extendedDescription, img } = game;
  return (
    <motion.div
      layoutId={`container-${name}`}
      onClick={(e) => e.stopPropagation()}
      className="bg-white w-1/3 rounded-md flex flex-col p-4 fixed top-1/3 z-30 overflow-hidden"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <motion.img
            layoutId={`img-${name}`}
            className="h-16 rounded"
            src={img}
            alt=""
          />
          <div>
            <motion.p
              layoutId={`name-${name}`}
              className="text-base font-medium text-slate-700"
            >
              {name}
            </motion.p>
            <motion.p
              layoutId={`desc-${name}`}
              className="text-xs text-gray-500"
            >
              {description}
            </motion.p>
          </div>
        </div>
        <motion.button
          layoutId={`button-${name}`}
          className="bg-gray-100 text-blue-500 font-medium h-min px-4 py-1 rounded-full text-sm"
        >
          Get
        </motion.button>
      </div>
      <motion.p
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        className="text-xs text-gray-400 leading-5 mt-4"
      >
        {extendedDescription}
      </motion.p>
    </motion.div>
  );
};
export default GameModal;
