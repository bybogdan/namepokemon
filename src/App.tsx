import { useState } from "react";
import { Mon } from "./components/Mon";
import { ALL_MONS } from "./data/mons";

const MAX_DEX_ID = 493;

export type MonType = {
  name: string;
  imageUrl: string;
};

function App() {
  const [showMon, setShowMon] = useState(false);
  const [mon, setMon] = useState<MonType>();

  const getRandomMon = async () => {
    setShowMon(false);
    const pokedexNumber = Math.floor(Math.random() * MAX_DEX_ID) + 1;
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedexNumber}.png`;
    setMon({
      name: ALL_MONS[pokedexNumber],
      imageUrl,
    });
  };

  return (
    <div className="App">
      <div className="flex flex-col px-6 py-12 h-screen justify-between">
        <div className="flex flex-col items-center gap-8">
          <h3 className="text-3xl">Get random pokemon</h3>

          <button
            onClick={getRandomMon}
            type="button"
            className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
          >
            Generate
          </button>
        </div>
        <img
          src={mon?.imageUrl}
          style={{ display: "none" }}
          onLoad={() => {
            setShowMon(true);
          }}
        />
        <div>{mon && showMon ? <Mon {...mon} /> : null}</div>
      </div>
    </div>
  );
}

export default App;
