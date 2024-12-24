import { Dispatch, SetStateAction } from "react";
import { Game } from "../animations/GamesAnimation";
import { motion } from "framer-motion";

type Props = {
  setSelectedGame: Dispatch<SetStateAction<number | null>>;
  game: Game;
};

const GameModal = ({ setSelectedGame, game }: Props) => {
  const { name, description, extendedDescription, img } = game;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedGame(null)}
      className="fixed h-full bg-black/50 inset-0 z-10 flex items-center justify-center"
    >
      <motion.div
        layoutId={`container-${name}`}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-1/3 rounded-md flex flex-col p-4"
      >
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
        <div className="mt-4">
          <p className="text-xs text-gray-400 leading-5">
            {extendedDescription}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default GameModal;
