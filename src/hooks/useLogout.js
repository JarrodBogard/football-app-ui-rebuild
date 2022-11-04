import { useAuthContext } from "./useAuthContext";
import { usePlayerContext } from "./usePlayerContext";
import { useStatsContext } from "./useStatsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: playerDispatch } = usePlayerContext();
  const { dispatch: statsDispatch } = useStatsContext();

  const logout = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
    playerDispatch({ type: "SET_PLAYERS", payload: null });
    statsDispatch({ type: "SET_GEN_STATS", payload: null });
  };

  return { logout };
};
