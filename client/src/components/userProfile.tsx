import React from "react";
import { useAuth0, User } from "@auth0/auth0-react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";

const Profile = () => {
  const [userCreate, { error, data }] = useMutation(CREATE_USER);
  const { user, isAuthenticated, isLoading }: User = useAuth0();
  console.log(user);

  const handleUserCreate = async () => {
        console.log(user.email);
        const { email, name, username } = user;
        const { data } = await userCreate({
          variables: {
            userName: username || name,
            email
          }
        });
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <div className="box user-comp-box">
          <img className="is-rounded" src={user.picture} alt={user.name} />
          <h2>{user.username}</h2>
          <button onClick={() => handleUserCreate()}>Add User</button>

        </div>
      </div>
    )
  );
};

export default Profile;