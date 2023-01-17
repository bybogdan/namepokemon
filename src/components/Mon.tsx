import { memo, useState } from "react";
import { MonType } from "../App";

const Comp: React.FC<MonType> = ({ name, imageUrl }) => {
  const [isCopied, setCopied] = useState(false);

  return (
    <div className="flex  flex-col items-center g">
      <div className="flex gap-2 items-center justify-center">
        <h3
          style={{ color: isCopied ? "rgb(34 197 94)" : "" }}
          className="text-3xl"
        >
          {name.toUpperCase()}
        </h3>
        <button
          onClick={async () => {
            await navigator.clipboard.writeText(name.toLowerCase());
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 1000);
          }}
          type="button"
          className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Copy
        </button>
      </div>
      <img
        style={{ imageRendering: "pixelated" }}
        width={256}
        height={256}
        src={imageUrl}
        alt="mon image"
      />
    </div>
  );
};

export const Mon = memo(Comp);
