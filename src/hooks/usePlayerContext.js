import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

export const usePlayerContext = () => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw Error(
      "usePlayerContext must be used inside the PlayerContextProvider"
    );
  }

  return context;
};
