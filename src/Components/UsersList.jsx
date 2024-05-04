import React from "react";
import User from "./User";
import PropTypes from "prop-types";
import { useState } from "react";
import { getUserTodos, getUserPosts } from "../Utils/crudActionsUPT";

const UsersList = ({
  users,
  searchFilter,
  onDeleteUser,
  onUpdateUser,
  todos,
  posts,
  onAddPost,
  onMarkTodoAsCompleted,
  onAddTodo,

}) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const onSelectUserHandler = (userId) => {
    setSelectedUsers((prev) => {
      const user = users.find((user) => Number(user.id) === Number(userId));
      //if user is already selected, then deselect it
      if (prev.some((id) => Number(id) === Number(userId))) {
        return [...prev.filter((id) => Number(id) !== Number(userId))];
      } else {
        return [...prev, Number(user.id)];
      }
    });
  };

  const Users = users
    .filter((user) => {
      return (
        user.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        user.email.toLowerCase().includes(searchFilter.toLowerCase())
      );
    })
    .map((user) => {
      return (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          address={user.address}
          onDeleteUser={onDeleteUser}
          onUpdateUser={onUpdateUser}
          onSelectUser={onSelectUserHandler}
          selected={selectedUsers.includes(user.id)}
          todos={getUserTodos(user.id, todos)}
          onMarkTodoAsCompleted={onMarkTodoAsCompleted}
          onAddTodo={onAddTodo}
          posts={getUserPosts(user.id, posts)}
          onAddPost={onAddPost}
        />
      );
    });

  return <div>{Users}</div>;
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  todos: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
  searchFilter: PropTypes.string.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onMarkTodoAsCompleted: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
    onAddPost: PropTypes.func.isRequired,
};

export default UsersList;
