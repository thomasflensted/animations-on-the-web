import { motion } from "framer-motion";
import { useState } from "react";

const HighLightedTabs = () => {
  const tabs = [
    { id: 1, title: "Collections" },
    { id: 2, title: "Favorites" },
    { id: 3, title: "Recent" },
    { id: 4, title: "Shared" },
  ];

  const [hoveredTab, setHoveredTab] = useState(1);

  return (
    <div className="flex justify-between w-1/3">
      {tabs.map((tab) => (
        <motion.p
          className="relative cursor-pointer px-2 py-1 text-sm outline-none transition-colors"
          key={tab.id}
          onMouseOver={() => setHoveredTab(tab.id)}
        >
          <span className="font-light">{tab.title}</span>
          {hoveredTab === tab.id ? (
            <motion.span
              layoutId="tab-indicator"
              className="absolute inset-0 rounded-lg bg-black/5 px-4"
            />
          ) : null}
        </motion.p>
      ))}
    </div>
  );
};

export default HighLightedTabs;
