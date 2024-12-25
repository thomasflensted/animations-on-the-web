import { motion } from "framer-motion";
import viking from "../assets/viking.jpg";

const ExpandedCard = () => {
  return (
    <motion.div
      layoutId="vikingcontainer"
      className="overflow-hidden rounded-lg relative w-80 z-30"
    >
      <motion.h2
        layoutId="vikingtitle"
        className="uppercase text-white z-20 absolute top-1 left-1 font-extrabold text-2xl leading-6"
      >
        Game of
        <br />
        the day
      </motion.h2>
      <motion.div
        layoutId="vikinggradient"
        className="absolute inset-0 bg-gradient-to-b from-black/35 to-transparent z-10 to-30%"
      />
      <motion.img
        layoutId="vikingimage"
        src={viking}
        alt="object-cover w-full h-full h-96"
      />
      <div className="p-3 flex flex-col gap-1 bg-white">
        <h2 className="font-semibold text-gray-700">The Jungle Viking</h2>
        <p className="font-light text-sm leading-5 text-gray-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ExpandedCard;

const description = `The Jungle Viking is an adventurous tale of resilience, strategy, and discovery. You play as a Nordic Viking who, after a fierce storm at sea, finds himself shipwrecked in an uncharted tropical rainforest. Stripped of the icy familiarity of his homeland, he must navigate a lush, untamed jungle filled with vibrant flora, exotic wildlife, and unexpected challenges. Armed with only his sword and wits, the Viking embarks on a journey to survive and find a way back home, all while uncovering the mysteries of this vivid and perilous environment.`;
