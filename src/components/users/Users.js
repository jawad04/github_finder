import React, { useContext } from "react";
import UserItem from "./UserItem";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/GithubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  const result = loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem id={user.id} key={user.id} user={user} />
      ))}
    </div>
  );
  return result;
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
export default Users;
