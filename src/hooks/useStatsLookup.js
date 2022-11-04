import { useStatsContext } from "./useStatsContext";

export const useStatsLookup = () => {
  const { specStats, specs, dispatch } = useStatsContext();

  const setData = async (players, stats) => {
    const fullNames = [];

    for (let i = 0; i < (await players.length); i++) {
      fullNames.push(`${players[i].first_name} ${players[i].last_name}`);
    }

    const filteredStats = await stats.filter((stat) => {
      if (fullNames.includes(`${stat.FirstName} ${stat.LastName}`)) return stat;
      else return null;
    });

    await dispatch({
      type: "SET_GEN_STATS",
      payload: filteredStats,
    });
  };

  const setSpecs = (id) => {
    const foundPlayer = specs.find((spec) => spec.PlayerID === id);

    dispatch({
      type: "SET_SPEC_STATS",
      payload: foundPlayer,
    });
    console.log(specStats);
  };

  return { setData, setSpecs };
};
