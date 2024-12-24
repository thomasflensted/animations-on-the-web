import odyssey from "../assets/odyssey.jpeg";
import rabbits from "../assets/rabbits.jpeg";
import mountains from "../assets/mountains.jpeg";
import pirates from "../assets/pirates.jpeg";

const GamesAnimation = () => {
  const games = [
    {
      id: 1,
      name: "Tic Tac Toe",
      description: "A simple game of Tic Tac Toe",
      img: odyssey,
    },
    {
      id: 2,
      name: "Connect Four",
      description: "A simple game of Connect Four",
      img: rabbits,
    },
    {
      id: 3,
      name: "Chess",
      description: "A simple game of Chess",
      img: pirates,
    },
    {
      id: 4,
      name: "Checkers",
      description: "A simple game of Checkers",
      img: mountains,
    },
  ];

  return (
    <div className="w-2/3">
      {games.map(({ id, name, description, img }, index) => (
        <div
          key={id}
          className={`w-full py-2 flex items-center justify-between ${
            index < games.length - 1 ? "border-b" : ""
          }`}
        >
          <div className="flex items-center gap-4">
            <img className="h-12 rounded" src={img} alt="" />
            <div>
              <p className="text-sm font-medium">{name}</p>
              <p className="text-xs text-gray-500">{description}</p>
            </div>
          </div>
          <button className="bg-gray-100 text-blue-500 font-medium px-4 py-1 rounded-full text-sm">
            Get
          </button>
        </div>
      ))}
    </div>
  );
};

export default GamesAnimation;
