import DrawerOne from "./animations/DrawerOne";
import GamesAnimation from "./animations/GamesAnimation";
import HighLightedTabs from "./animations/HighLightedTabs";
import LayoutAnimation from "./animations/LayoutAnimation";
import LayoutIdAnimation from "./animations/LayoutIdAnimation";
import LoginBtn from "./animations/LoginBtn";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center mb-40">
      <div className="flex justify-center items-center mt-10 flex-col gap-6 w-1/2">
        <LoginBtn />
        <hr className="border-b-[0.5px] w-full" />
        <DrawerOne />
        <hr className="border-b-[0.5px] w-full" />
        <LayoutAnimation />
        <hr className="border-b-[0.5px] w-full" />
        <HighLightedTabs />
        <hr className="border-b-[0.5px] w-full" />
        <LayoutIdAnimation />
        <hr className="border-b-[0.5px] w-full" />
        <GamesAnimation />
      </div>
    </div>
  );
}

export default App;
