import { createContext, useReducer } from "react";

export const StatsContext = createContext();

export const statsReducer = (state, action) => {
  switch (action.type) {
    case "SET_STATS":
      return { ...state, stats: action.payload };
    case "SET_SPECS":
      return { ...state, specs: action.payload };
    case "SET_GEN_STATS":
      return { ...state, genStats: action.payload };
    case "SET_SPEC_STATS":
      return { ...state, specStats: action.payload };
    case "REFRESH_GEN_STATS":
      return {
        ...state,
        genStats: state.genStats.filter(
          (stat) => stat.PlayerID !== action.payload
        ),
      };
    case "ADD_GEN_STATS":
      return {
        ...state,
        genStats: [action.payload, ...state.genStats],
      };
    default:
      return state;
  }
};

export const StatsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(statsReducer, {
    stats: null,
    specs: null,
    genStats: null,
    specStats: null,
  });

  return (
    <StatsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StatsContext.Provider>
  );
};
