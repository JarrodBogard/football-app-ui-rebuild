const WRTECard = ({ specStats }) => {
  return (
    <>
      <h4 style={{ margin: "2.5px 0", color: "rgb(14, 73, 250)" }}>
        (Receiving Stats)
      </h4>
      <li>Targets: {specStats.ReceivingTargets}</li>
      <li>Catches: {specStats.Receptions}</li>
      <li>Rec Yards: {specStats.ReceivingYards}</li>
      <li>Yards Per Rec: {specStats.ReceivingYardsPerReception}</li>
      <li>Rec TDs: {specStats.ReceivingTouchdowns}</li>
      <h4 style={{ margin: "2.5px 0", color: "rgb(14, 73, 250)" }}>
        (Fumbles, Misc.)
      </h4>
      <li>Rushing Attempts: {specStats.RushingAttempts}</li>
      <li>Rushing Yards: {specStats.RushingYards}</li>
      <li>Rushing TDs: {specStats.RushingTouchdowns}</li>
      <li>Fumbles Per Game: {specStats.Fumbles}</li>
    </>
  );
};

export default WRTECard;
