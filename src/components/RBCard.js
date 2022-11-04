const RBCard = ({ specStats }) => {
  console.log(specStats);
  console.log(specStats.RushingYards);
  return (
    <>
      <h4 style={{ margin: "2.5px 0", color: "rgb(14, 73, 250)" }}>
        (Rushing Stats)
      </h4>
      <li>Rushing Attempts: {specStats.RushingAttempts}</li>
      <li>Rushing Yards: {specStats.RushingYards}</li>
      <li>Yards Per Attempt: {specStats.RushingYardsPerAttempt}</li>
      <li>Rushing TDs: {specStats.RushingTouchdowns}</li>
      <h4 style={{ margin: "2.5px 0", color: "rgb(14, 73, 250)" }}>
        (Receiving Stats and Fumbles)
      </h4>
      <li>Targets: {specStats.ReceivingTargets}</li>
      <li>Catches: {specStats.Receptions}</li>
      <li>Rec Yards: {specStats.ReceivingYards}</li>
      <li>Rec TDs: {specStats.ReceivingTouchdowns}</li>
      <li>Fumbles Per Game: {specStats.Fumbles}</li>
    </>
  );
};

export default RBCard;
