import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { login } from "../api/login";

export default function Index() {
  const value = useContext(UserContext);

  return (
    <div className="contextApp-container">
      <h2>Home</h2>
      <pre>{JSON.stringify(value.user, null, 2)}</pre>
      {value.user ? (
        <button
          className="btn"
          onClick={() => {
            // call logout
            value.setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          className="btn"
          onClick={async () => {
            const user = await login();
            value.setUser(user);
          }}
        >
          login
        </button>
      )}
    </div>
  );
}