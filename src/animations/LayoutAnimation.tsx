import { useState } from "react";
import { motion } from "framer-motion";

const LayoutAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const size = 50;

  return (
    <div className="w-1/2 aspect-square border flex justify-center items-center relative">
      <motion.div
        layout
        className="bg-yellow-400"
        style={
          isOpen
            ? { position: "absolute", inset: 0, height: "100%", width: "100%" }
            : { height: size, width: size }
        }
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default LayoutAnimation;
