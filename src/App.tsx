import { useState } from "react";
import { ALL_MONS } from "./data/mons";

const MAX_DEX_ID = 493;

function App() {
  const [mon, setMon] = useState(0);
  const [isCopied, setCopied] = useState(false);

  const getRandomMon = async () => {
    setCopied(false);
    const pokedexNumber = Math.floor(Math.random() * MAX_DEX_ID) + 1;
    setMon(pokedexNumber);
  };

  return (
    <div className="App">
      <div className="flex flex-col px-6 py-12 h-screen justify-between">
        <button onClick={getRandomMon}>get random pokemon name</button>
        <div>
          {mon ? (
            <div className="flex  flex-col items-center">
              <div className="flex gap-2 mb-8 items-center justify-center">
                <h3
                  style={{ color: isCopied ? "green" : "" }}
                  className="text-3xl"
                >
                  {ALL_MONS[mon].toUpperCase()}
                </h3>
                <button
                  type="button"
                  style={{ border: "1px solid white" }}
                  onClick={async () => {
                    await navigator.clipboard.writeText(
                      ALL_MONS[mon].toLowerCase()
                    );
                    setCopied(true);
                  }}
                >
                  copy
                </button>
              </div>
              <img
                width={200}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${mon}.png`}
                alt="mon image"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
