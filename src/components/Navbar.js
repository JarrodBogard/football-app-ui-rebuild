import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>My Football App</h1>
        </Link>
        <nav>
          {user ? (
            <div className="logged">
              <span>{user.username}</span>
              <Link to="/login" onClick={handleClick}>
                Log Out
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Log In</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
