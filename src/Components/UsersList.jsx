import  { useState } from "react";
import PropTypes from "prop-types";
import User from "./User";
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

  //handle user selection for bulk actions
  const onSelectUserHandler = (userId) => {
    setSelectedUsers((prev) => {
      return prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId];
    });
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      user.email.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const Users = filteredUsers.map(({ id, name, email, address }) => (
    <User
      key={id}
      id={id}
      name={name}
      email={email}
      address={address}
      onDeleteUser={onDeleteUser}
      onUpdateUser={onUpdateUser}
      onSelectUser={onSelectUserHandler}
      selected={selectedUsers.includes(id)}
      todos={getUserTodos(id, todos)}
      onMarkTodoAsCompleted={onMarkTodoAsCompleted}
      onAddTodo={onAddTodo}
      posts={getUserPosts(id, posts)}
      onAddPost={onAddPost}
    />
  ));

  return <div>{Users}</div>;
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    })
  ).isRequired,
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
