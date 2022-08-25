import { useContext, useEffect } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, isLoading } = useContext(GithubContext);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="max-w-6xl px-6 md:px-0 mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {users.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
}

export default UserResults;
