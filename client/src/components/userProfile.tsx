import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";

const Profile = () => {
  const { user, isAuthenticated, isLoading }: any = useAuth0();
  // const [userCreate, { error, data }] = useMutation(CREATE_USER);

  // const handleUserCreate = async () => {
  //       console.log(user.username);
  //       const { data } = await userCreate({
  //         variables: {
  //           userName: user.name,
  //           email: user.email
  //         }
  //       });
  // };

  // if (isAuthenticated) {
  //   handleUserCreate();
  //   return;
  // };


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