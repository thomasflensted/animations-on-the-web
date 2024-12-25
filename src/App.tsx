import LayoutIdAnimation from "./animations/LayoutIdAnimation";
import HighLightedTabs from "./animations/HighLightedTabs";
import GamesAnimation from "./animations/GamesAnimation";
import GameOfTheDay from "./animations/GameOfTheDay";
import Container from "./components/Container";
import DrawerOne from "./animations/DrawerOne";
import FeedbackPopover from "./animations/FeedbackPopover";
import ButtonAnimation from "./animations/ButtonAnimation";

function App() {
  const animations = [
    ButtonAnimation,
    DrawerOne,
    HighLightedTabs,
    LayoutIdAnimation,
    GamesAnimation,
    GameOfTheDay,
    FeedbackPopover,
  ];

  return (
    <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll no-scrollbar">
      {animations.map((Animation, index) => (
        <Container key={index}>
          <Animation />
        </Container>
      ))}
    </div>
  );
}

export default App;
