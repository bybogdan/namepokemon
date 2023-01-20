import { useState } from "react";
import { Mon } from "./components/Mon";
import { ALL_MONS } from "./data/mons";
import pokeball from ".//pokeball512.png";

const MAX_DEX_ID = 493;

export type MonType = {
  isShowPlaceholder?: boolean;
  name: string;
  imageUrl: string;
};

function App() {
  const [isLoading, setLoading] = useState(false);
  const [mon, setMon] = useState<MonType>();

  const getRandomMon = async () => {
    setLoading(true);
    const pokedexNumber = Math.floor(Math.random() * MAX_DEX_ID) + 1;
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedexNumber}.png`;
    setMon({
      name: ALL_MONS[pokedexNumber].toUpperCase(),
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
            className="border-double border-4 border-gray-600 inline-block p-3 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:border-gray-500 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:border-blue-400 focus:ring-0 active:bg-gray-500 active:shadow-lg transition duration-150 ease-in-out"
            disabled={isLoading}
          >
            Generate
          </button>
        </div>
        <img
          src={mon?.imageUrl}
          style={{ display: "none" }}
          onLoad={() => {
            setLoading(false);
          }}
        />
        <div>
          {mon && !isLoading ? (
            <Mon {...mon} />
          ) : isLoading ? (
            <Mon isShowPlaceholder name="Loading..." imageUrl={pokeball} />
          ) : (
            <Mon isShowPlaceholder name="" imageUrl={pokeball} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
