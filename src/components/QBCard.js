const QBCard = ({ specStats }) => {
  return (
    <>
      <h4 style={{ margin: "2.5px 0", color: "rgb(14, 73, 250)" }}>
        (Passing Stats)
      </h4>
      <li>Pass Attempts: {specStats.PassingAttempts}</li>
      <li>Pass Completions: {specStats.PassingCompletions}</li>
      <li>Passing Yards: {specStats.PassingYards}</li>
      <li>Pass Percentage: {specStats.PassingCompletionPercentage}%</li>
      <li>Passing Yards Per Attempt: {specStats.PassingYardsPerAttempt}</li>
      <li>Pass Percentage: {specStats.PassingYardsPerCompletion}%</li>
      <li>Passing TDs Per Game: {specStats.PassingTouchdowns}</li>
      <h4 style={{ margin: "2.5px 0", color: "rgb(14, 73, 250)" }}>
        (Fumbles, Interceptions, Sacks)
      </h4>
      <li>Fumbles Per Game: {specStats.Fumbles}</li>
      <li>Interceptions Per Game: {specStats.Interceptions}</li>
      <li>Sacks Per Game: {specStats.Sacks}</li>
    </>
  );
};

export default QBCard;
