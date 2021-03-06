import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export default function About() {
  const { user } = useContext(UserContext);

  return (
    <div className="contextApp-container">
      <h2>Profile</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}