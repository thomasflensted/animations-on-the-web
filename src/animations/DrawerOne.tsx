import { useState } from "react";
import { useMeasure } from "@uidotdev/usehooks";
import { motion } from "framer-motion";

const DrawerOne = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, { height }] = useMeasure();

  return (
    <div className="flex flex-col gap-2 items-center h-56 justify-between">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="rounded-lg bg-gradient-to-b font-thin from-blue-400 to-blue-500 text-white px-4 py-1.5"
      >
        Toggle height
      </button>
      <motion.div
        className="rounded-2xl w-[320px] shadow-md bg-gradient-to-b from-blue-400 to-blue-500 flex flex-col overflow-hidden"
        animate={{ height: height ? height : 100 }}
      >
        <div className="p-4" ref={ref}>
          <h2 className="font-semibold text-white">Fake Family Drawer</h2>
          <p className="font-light text-sm leading-6 text-white">
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>
          {isExpanded ? (
            <p className="font-light text-sm leading-6 text-white">
              This extra content will change the height of the drawer. Some even
              more content to make the drawer taller and taller and taller...
            </p>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
};

export default DrawerOne;
