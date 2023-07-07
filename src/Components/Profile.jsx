import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from "./LogoutButton";
import Card from "./Card";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <Card />
        <div className=" container">
          <h2> {user.name} </h2>
          <h2> {user.email} </h2>

          <pre>{JSON.stringify(user)}</pre>
          <LogoutButton />
        </div>
      </div>
    )
  );
};

export default Profile;
