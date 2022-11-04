import { useState, useEffect } from "react";
import { usePlayerContext } from "../hooks/usePlayerContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useStatsContext } from "../hooks/useStatsContext";
import { useStatsLookup } from "../hooks/useStatsLookup";

import AddPlayerForm from "../components/AddPlayerForm";
import PlayerCard from "../components/PlayerCard";

const Home = () => {
  const [playersData, setPlayersData] = useState(null);
  const [statsData, setStatsData] = useState(null);
  const { setData } = useStatsLookup();

  const { players, dispatch } = usePlayerContext();
  const { stats, genStats, dispatch: statsDispatch } = useStatsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) return;

    const fetchPlayersData = async () => {
      const response = await fetch(
        `https://football-app-beta.vercel.app/players/${user.id}/users`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: "SET_PLAYERS",
          payload: json,
        });
        setPlayersData(json);
      }
    };

    const fetchGenPlayerStats = async () => {
      const response = await fetch(
        "https://api.sportsdata.io/api/nfl/fantasy/json/Players?key=61fd0979be90419cbd6dc53c4e6f2df3"
      );

      const json = await response.json();

      if (response.ok) {
        statsDispatch({
          type: "SET_STATS",
          payload: json,
        });
        setStatsData(json);
      }
    };

    const fetchSpecPlayerStats = async () => {
      const response = await fetch(
        "https://api.sportsdata.io/api/nfl/fantasy/json/PlayerGameStatsByWeek/2021REG/8?key=61fd0979be90419cbd6dc53c4e6f2df3"
      );

      const json = await response.json();

      if (response.ok) {
        statsDispatch({
          type: "SET_SPECS",
          payload: json,
        });
      }
    };

    if (user) {
      fetchGenPlayerStats();
      fetchSpecPlayerStats();
      fetchPlayersData();
    }
  }, [dispatch, user, statsDispatch]);

  useEffect(() => {
    if (playersData && statsData) {
      // could also use context on useStatsLookup and just set toggle in local state here
      setData(playersData, statsData);
      setPlayersData(null);
      setStatsData(null);
    }
  }, [setData, playersData, statsData, players, genStats]);

  return (
    <div className="home">
      <AddPlayerForm
        statsDispatch={statsDispatch}
        stats={stats}
        user={user}
        dispatch={dispatch}
      />
      <ul className="players">
        {genStats &&
          genStats.map((player, index) => (
            <PlayerCard
              key={player.PlayerID + player.LastName + index}
              player={player}
              players={players}
              user={user}
              dispatch={dispatch}
              statsDispatch={statsDispatch}
            />
          ))}
      </ul>
    </div>
  );
};

export default Home;
