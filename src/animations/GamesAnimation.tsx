import odyssey from "../assets/odyssey.jpeg";
import rabbits from "../assets/rabbits.jpeg";
import mountains from "../assets/mountains.jpeg";
import pirates from "../assets/pirates.jpeg";
import { useState } from "react";
import GameModal from "../components/GameModal";
import GamePreview from "../components/GamePreview";
import Backdrop from "../components/Backdrop";
import { AnimatePresence } from "framer-motion";

const GamesAnimation = () => {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  return (
    <>
      <Backdrop
        isVisible={selectedGame !== null}
        onClick={() => setSelectedGame(null)}
      />
      <AnimatePresence>
        {selectedGame !== null && (
          <GameModal
            setSelectedGame={setSelectedGame}
            game={games[selectedGame]}
          />
        )}
      </AnimatePresence>
      <div className="w-1/3 z-20">
        {games.map((game, index) => (
          <GamePreview
            game={game}
            key={game.name}
            index={index}
            setSelectedGame={setSelectedGame}
            showBottomBorder={index !== games.length - 1}
          />
        ))}
      </div>
    </>
  );
};

export default GamesAnimation;

export type Game = {
  name: string;
  description: string;
  extendedDescription: string;
  img: string;
};

const games: Game[] = [
  {
    name: "The Odyssey",
    description: "An epic journey filled with adventure and challenges.",
    extendedDescription:
      "Embark on 'The Odyssey,' a grand tale of courage, resilience, and discovery. Navigate through trials and tribulations as you explore uncharted lands, encounter mythical creatures, and uncover the secrets of an ancient world. Every step brings new challenges and unforgettable experiences.",
    img: odyssey,
  },
  {
    name: "Angry Rabbits",
    description: "A thrilling adventure with mischievous rabbits.",
    extendedDescription:
      "Dive into the chaotic world of 'Angry Rabbits,' where mischief and mayhem abound. These feisty rabbits are on a mission, and it's up to you to join the fun. With quick reflexes and strategic moves, you'll guide them through wild challenges and hilarious encounters.",
    img: rabbits,
  },
  {
    name: "Pirates of the Jungle",
    description: "A swashbuckling jungle adventure with daring pirates.",
    extendedDescription:
      "Set sail with 'Pirates of the Jungle,' a thrilling escapade where untamed wilderness meets the high seas. Battle foes, uncover hidden treasures, and navigate treacherous jungle terrain in this action-packed journey of adventure and camaraderie.",
    img: pirates,
  },
  {
    name: "Lost in the Mountains",
    description: "A gripping tale of survival and discovery in the mountains.",
    extendedDescription:
      "Experience the breathtaking beauty and unforgiving challenges of 'Lost in the Mountains.' Test your survival instincts as you traverse rugged terrains, uncover hidden secrets, and overcome nature's obstacles in a story of endurance and triumph.",
    img: mountains,
  },
];
