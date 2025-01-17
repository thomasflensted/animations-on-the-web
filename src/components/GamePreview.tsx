import { Dispatch, SetStateAction } from "react";
import { Game } from "../animations/GamesAnimation";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  setSelectedGame: Dispatch<SetStateAction<number | null>>;
  game: Game;
  index: number;
  showBottomBorder: boolean;
};

const GamePreview = ({
  index,
  setSelectedGame,
  game,
  showBottomBorder,
}: Props) => {
  const { name, description, img } = game;
  return (
    <AnimatePresence>
      <motion.div
        layoutId={`container-${name}`}
        onClick={() => setSelectedGame(index)}
        key={name}
        className={`py-2 flex items-center cursor-pointer justify-between ${
          showBottomBorder ? "border-b" : ""
        }`}
      >
        <div className="flex items-center gap-4">
          <motion.img
            layoutId={`img-${name}`}
            className="h-12 rounded"
            src={img}
            alt=""
          />
          <div>
            <motion.p layoutId={`name-${name}`} className="text-sm font-medium">
              {name}
            </motion.p>
            <motion.p
              layoutId={`desc-${name}`}
              className="text-xs text-gray-400"
            >
              {description}
            </motion.p>
          </div>
        </div>
        <motion.button
          layoutId={`button-${name}`}
          className="bg-gray-100 text-blue-500 font-medium px-4 py-1 rounded-full text-sm"
        >
          Get
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};
export default GamePreview;
