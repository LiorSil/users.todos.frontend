
import { useState } from 'react';
import Card from "./Components/Card";
import classes from "./Components/CSS/Card.module.css";

import { posts, users, todos } from "./Data/fetchData";
import UsersList from "./Components/UsersList";
import SearchBar from "./Components/SearchBar";
import {
  deleteUser,
  updateUser,
  markTodoAsCompleted,
  addTodoToUser,
  addPostToUser,
  addUserToUsers,
} from "./Utils/crudActionsUPT";
import AddUser from "./Components/AddUser";

const App = () => {
  const [search, setSearch] = useState("");
  const [toggleAddUser, setToggleAddUser] = useState(false);
  const [userData, setUserData] = useState({ users, posts, todos });

  const addUserHandler = (user) => {
    const confirmation = window.confirm(
      "Are you sure you want to add this user?"
    );
    if (!confirmation) return;
    const newUsers = addUserToUsers(userData.users, user);
    setUserData({
      users: newUsers,
      posts: userData.posts,
      todos: userData.todos,
    });
    alert("User added successfully");
  };

  const deleteUsersHandler = (userId) => {
    const [newUsers, newPosts, newTodos] = deleteUser(
      userId,
      userData.users,
      userData.posts,
      userData.todos
    );
    const confirmation = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmation) return;
    setUserData({ users: newUsers, posts: newPosts, todos: newTodos });
    alert("User deleted successfully");
  };
  const updateUsersHandler = (userId, name, email) => {
    //validate name and email
    if (!name || !email) {
      alert("Name and email are required");
      return;
    }
    const updatedUsers = updateUser(userId, userData.users, name, email);
    const confirmation = window.confirm(
      "Are you sure you want to update this user?"
    );
    if (!confirmation) return;
    setUserData({
      users: updatedUsers,
      posts: userData.posts,
      todos: userData.todos,
    });
    alert("User updated successfully");
  };

  const onMarkTodoAsCompletedHandler = (todoId) => {
    const updatedTodos = markTodoAsCompleted(todoId, userData.todos);
    setUserData({
      users: userData.users,
      posts: userData.posts,
      todos: updatedTodos,
    });
  };

  const onAddTodoHandler = (todo) => {
    const confirmation = window.confirm(
      "Are you sure you want to add this todo?"
    );
    if (!confirmation) return;
    const updatedTodos = addTodoToUser(userData.todos, todo);
    setUserData({
      users: userData.users,
      posts: userData.posts,
      todos: updatedTodos,
    });
    alert("Todo added successfully");
  };

  const onAddPostHandler = (post) => {
    const confirmation = window.confirm(
      "Are you sure you want to add this post?"
    );
    if (!confirmation) return;
    const updatedPosts = addPostToUser(userData.posts, post);
    setUserData({
      users: userData.users,
      posts: updatedPosts,
      todos: userData.todos,
    });
    alert("Post added successfully");
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div style={{ width: "250px", position: "relative", margin: "0 auto" }}>
        <Card>
          <SearchBar onSearch={searchHandler} />
          <br />
          <button
            className={classes.card_btn}
            onClick={() => setToggleAddUser(true)}
          >
            Add User
          </button>
          {toggleAddUser && (
            <AddUser
              onAddUser={addUserHandler}
              onCancelAddUser={() => setToggleAddUser(false)}
            />
          )}
        </Card>
      </div>
      <UsersList
        users={userData.users}
        searchFilter={search}
        onDeleteUser={deleteUsersHandler}
        onUpdateUser={updateUsersHandler}
        todos={userData.todos}
        posts={userData.posts}
        onAddPost={onAddPostHandler}
        onMarkTodoAsCompleted={onMarkTodoAsCompletedHandler}
        onAddTodo={onAddTodoHandler}
      />
    </>
  );
};

export default App
