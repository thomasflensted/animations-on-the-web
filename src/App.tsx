import AnimatedScrollbar from "./components/AnimatedScrollbar";
import FeedbackPopover from "./animations/FeedbackPopover";
import HighLightedTabs from "./animations/HighLightedTabs";
import ButtonAnimation from "./animations/ButtonAnimation";
import GamesAnimation from "./animations/GamesAnimation";
import GameOfTheDay from "./animations/GameOfTheDay";
import DrawerOne from "./animations/DrawerOne";
import { useState } from "react";
import Container from "./components/Container";
import StepAnimation from "./animations/StepAnimation";
import Trash from "./animations/Trash";

function App() {
  const [animationInView, setAnimationInView] = useState<number | null>(null);

  const animations = [
    ButtonAnimation,
    DrawerOne,
    HighLightedTabs,
    GamesAnimation,
    GameOfTheDay,
    FeedbackPopover,
    StepAnimation,
    Trash,
  ];

  return (
    <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll no-scrollbar">
      <div className="h-full fixed right-0 flex flex-col justify-around pr-4">
        <AnimatedScrollbar
          animationInView={animationInView}
          length={animations.length}
        />
      </div>
      {animations.map((Animation, index) => (
        <Container key={index} handleInView={setAnimationInView} index={index}>
          <Animation />
        </Container>
      ))}
    </div>
  );
}

export default App;
