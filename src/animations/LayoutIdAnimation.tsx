import { motion } from "framer-motion";
import { useState } from "react";

const LayoutIdAnimation = () => {
  const [shownRect, setShownRect] = useState(0);

  return (
    <div
      onClick={() => setShownRect(shownRect === 0 ? 1 : 0)}
      className="flex items-center justify-center h-32"
    >
      {!shownRect ? (
        <motion.div
          layoutId="square"
          transition={{ type: "spring" }}
          className="bg-yellow-400 h-12 aspect-square rounded cursor-pointer"
        />
      ) : (
        <motion.div
          layoutId="square"
          transition={{ type: "spring" }}
          className="bg-yellow-400 h-32 aspect-square rounded cursor-pointer"
        />
      )}
    </div>
  );
};

export default LayoutIdAnimation;
