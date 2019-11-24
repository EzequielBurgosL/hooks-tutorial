import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { login } from "../api/login";

export default function Index() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="contextApp-container">
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          className="btn"
          onClick={() => {
            // call logout
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          className="btn"
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </div>
  );
}