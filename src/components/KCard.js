const KCard = ({ specStats }) => {
  return (
    <>
      <h4 style={{ margin: "2.5px 0", color: "rgb(14, 73, 250)" }}>
        (Kicking Stats)
      </h4>
      <li>FGs Attempted: {specStats.FieldGoalsAttempted}</li>
      <li>FGs Made: {specStats.FieldGoalsMade}</li>
      <li>FGs 20-29yds: {specStats.FieldGoalsMade20to29}</li>
      <li>FGs 30-39yds: {specStats.FieldGoalsMade30to39}</li>
      <li>FGs 40-49yds: {specStats.FieldGoalsMade40to49}</li>
      <li>FGs 50+yds: {specStats.FieldGoalsMade50Plus}</li>
      <h4 style={{ margin: "2.5px 0", color: "rgb(14, 73, 250)" }}>
        (Fumbles, Misc.)
      </h4>
      <li>Fumbles Per Game: {specStats.Fumbles}</li>
    </>
  );
};

export default KCard;
