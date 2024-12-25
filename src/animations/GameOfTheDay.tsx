import { useState } from "react";
import Backdrop from "../components/Backdrop";
import CollapsedCard from "../components/CollapsedCard";
import ExpandedCard from "../components/ExpandedCard";

const GameOfTheDay = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Backdrop isVisible={isOpen} onClick={() => setIsOpen(false)} />
      {isOpen ? <ExpandedCard /> : <CollapsedCard setIsOpen={setIsOpen} />}
    </>
  );
};

export default GameOfTheDay;
