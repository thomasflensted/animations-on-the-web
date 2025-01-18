import LayoutIdAnimation from "./animations/LayoutIdAnimation";
import HighLightedTabs from "./animations/HighLightedTabs";
import GamesAnimation from "./animations/GamesAnimation";
import GameOfTheDay from "./animations/GameOfTheDay";
import Container from "./components/Container";
import DrawerOne from "./animations/DrawerOne";
import FeedbackPopover from "./animations/FeedbackPopover";
import ButtonAnimation from "./animations/ButtonAnimation";
import { useEffect, useRef, useState } from "react";
import AnimatedScrollbar from "./components/AnimatedScrollbar";

function App() {
  const [animationInView, setAnimationInView] = useState<number | null>(null);
  const containerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const containerRefsForCleanup = containerRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = containerRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (entry.isIntersecting && index !== -1) {
            setAnimationInView(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    containerRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      containerRefsForCleanup.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

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
    <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll no-scrollbar relative">
      <div className="h-full fixed right-0 flex flex-col justify-around pr-4">
        <AnimatedScrollbar
          animationInView={animationInView}
          length={animations.length}
        />
      </div>
      {animations.map((Animation, index) => (
        <Container
          ref={(el: HTMLDivElement) => (containerRefs.current[index] = el)}
          key={index}
        >
          <Animation />
        </Container>
      ))}
    </div>
  );
}

export default App;
