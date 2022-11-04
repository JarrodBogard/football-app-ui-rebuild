import { useState } from "react";

const AddPlayerForm = ({ statsDispatch, stats, user, dispatch }) => {
  const [state, setState] = useState({
    user_id: user.id,
    first_name: "",
    last_name: "",
  });

  const [search, setSearch] = useState({
    playerName: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSearch({
      ...search,
      playerName: e.target.value,
    });

    setState({
      ...state,
      first_name: e.target.value.split(" ")[0],
      last_name: e.target.value.split(" ")[1],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const response = await fetch(
      `https://football-app-beta.vercel.app/players`,
      {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setError(json.err);
    }

    if (response.ok) {
      setSearch({
        ...state,
        playerName: "",
      });

      setState({
        ...state,
        first_name: "",
        last_name: "",
      });

      setError(null);
      dispatch({ type: "CREATE_PLAYER", payload: json });
      const foundPlayer = stats.find(
        (player) =>
          player.DraftKingsName === `${json.first_name} ${json.last_name}`
      );
      statsDispatch({ type: "ADD_GEN_STATS", payload: foundPlayer });
    }
  };

  return (
    <form className="add-player" onSubmit={handleSubmit}>
      <label htmlFor="playerName">
        <span>Search Players: </span>
        <input
          type="text"
          onChange={handleChange}
          value={search.playerName}
          name="playerName"
        />
      </label>
      <button>Add Player</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddPlayerForm;
