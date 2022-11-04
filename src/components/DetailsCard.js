import { useStatsContext } from "../hooks/useStatsContext";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

import QBCard from "./QBCard";
import WRTECard from "./WRTECard";
import RBCard from "./RBCard";
import KCard from "./KCard";

const DetailsCard = ({ player }) => {
  const { specStats } = useStatsContext();

  const fadeInAnimation = keyframes`${fadeIn}`;
  const FadeInDiv = styled.div`
    animation: 1s ${fadeInAnimation};
  `;

  return (
    <FadeInDiv className="details">
      <img
        src={player.PhotoUrl}
        alt={`${player.FirstName} ${player.LastName}`}
      />
      <p>
        {player.FirstName} {player.LastName} (
        {player.InjuryStatus === null ? "Healthy" : "Injured"})
      </p>
      <ul style={{ listStyle: "none" }}>
        <li>Team: {player.Team}</li>
        <li>Position: {player.Position}</li>
        <h2 style={{ margin: "2.5px 0" }}>
          Season Stats (Week: {specStats.Week})
        </h2>
        {player.Position === "QB" && <QBCard specStats={specStats} />}
        {(player.Position === "WR" || player.Position === "TE") && (
          <WRTECard specStats={specStats} />
        )}
        {player.Position === "RB" && <RBCard specStats={specStats} />}
        {player.Position === "K" && <KCard specStats={specStats} />}
      </ul>
    </FadeInDiv>
  );
};

export default DetailsCard;
