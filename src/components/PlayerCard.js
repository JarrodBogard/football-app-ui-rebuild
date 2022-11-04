import { useEffect, useState } from "react";
import { useStatsLookup } from "../hooks/useStatsLookup";
import DetailsCard from "./DetailsCard";

import GenStatsCard from "./GenStatsCard";

const PlayerCard = ({ player, dispatch, statsDispatch, players, user }) => {
  const [isToggled, setIsToggled] = useState(false);
  const { setSpecs } = useStatsLookup();

  const handleDelete = async () => {
    if (!user) {
      return;
    }

    const foundPlayer = players.find(
      (el) => `${el.first_name} ${el.last_name}` === player.DraftKingsName
    );

    const response = await fetch(
      `https://football-app-beta.vercel.app/players/${foundPlayer.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_PLAYER", payload: json });
      statsDispatch({ type: "REFRESH_GEN_STATS", payload: player.PlayerID });
    }
  };

  const handleDetails = () => {
    setIsToggled(!isToggled);
    setSpecs(player.PlayerID);
  };

  useEffect(() => {
    console.log(isToggled);
  }, [isToggled]);

  return (
    <div>
      {isToggled && <DetailsCard player={player} />}
      <div
        className={isToggled ? "blur" : ""}
        onClick={() => setIsToggled(!isToggled)}
      ></div>
      <li className="player-details">
        <h2>{player.DraftKingsName}</h2>
        <img src={player.PhotoUrl} alt={player.DraftKingsName} />
        <h4>Stats</h4>
        <GenStatsCard player={player} />
        <span class="material-symbols-outlined delete" onClick={handleDelete}>
          cancel
        </span>
        <button onClick={handleDetails}>Details</button>
      </li>
    </div>
  );
};

export default PlayerCard;
