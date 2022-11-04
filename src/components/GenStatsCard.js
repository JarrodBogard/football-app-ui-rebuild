import { useStatsContext } from "../hooks/useStatsContext";

const GenStatsCard = ({ player }) => {
  const { specs } = useStatsContext();
  let foundSpecs;

  if (specs && player) {
    foundSpecs = specs.find((spec) => spec.PlayerID === player.PlayerID);
  }

  return (
    <ul className="gen-stats">
      {foundSpecs && (
        <li>
          <p>
            <span>Fantasy Pts:</span>{" "}
            <span className="list-span">{foundSpecs.FantasyPoints}</span>
          </p>
          <p>
            <span>Status:</span>
            <span
              className="list-status"
              style={
                player.InjuryStatus === null
                  ? { color: "green" }
                  : { color: "red" }
              }
            >
              {player.InjuryStatus === null ? "Healthy" : "Injured"}
            </span>
          </p>
          <p>
            <span>Next Game:</span>{" "}
            <span className="list-span">{foundSpecs.Opponent}</span>
          </p>
        </li>
      )}
    </ul>
  );
};

export default GenStatsCard;
