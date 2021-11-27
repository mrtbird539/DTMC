import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading }: any = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <div className="box user-comp-box">
          <img className="is-rounded" src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          
        </div>
      </div>
    )
  );
};

export default Profile;