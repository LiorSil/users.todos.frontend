import React from 'react'
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
  const [data, setData] = useState({ users, posts, todos });

  const addUserHandler = (user) => {
    const ok = confirm("Are you sure you want to add this user?");
    if (!ok) return;
    const newUsers = addUserToUsers(data.users, user);
    setData({ users: newUsers, posts: data.posts, todos: data.todos });
    alert("User added successfully");
  };

  const deleteUsersHandler = (userId) => {
    const [newUsers, newPosts, newTodos] = deleteUser(
      userId,
      data.users,
      data.posts,
      data.todos
    );
    const ok = confirm("Are you sure you want to delete this user?");
    if (!ok) return;
    setData({ users: newUsers, posts: newPosts, todos: newTodos });
    alert("User deleted successfully");
  };
  const updateUsersHandler = (userId, name, email) => {
    //validate name and email
    if (!name || !email) {
      alert("Name and email are required");
      return;
    }
    const updatedUsers = updateUser(userId, data.users, name, email);
    const ok = confirm("Are you sure you want to update this user?");
    if (!ok) return;
    setData({ users: updatedUsers, posts: data.posts, todos: data.todos });
    alert("User updated successfully");
  };

  const onMarkTodoAsCompletedHandler = (todoId) => {
    const updatedTodos = markTodoAsCompleted(todoId, data.todos);
    setData({ users: data.users, posts: data.posts, todos: updatedTodos });
  };

  const onAddTodoHandler = (todo) => {
    const ok = confirm("Are you sure you want to add this todo?");
    if (!ok) return;
    const updatedTodos = addTodoToUser(data.todos, todo);
    setData({ users: data.users, posts: data.posts, todos: updatedTodos });
    alert("Todo added successfully");
  };

  const onAddPostHandler = (post) => {
    const ok = confirm("Are you sure you want to add this post?");
    if (!ok) return;
    const updatedPosts = addPostToUser(data.posts, post);
    setData({ users: data.users, posts: updatedPosts, todos: data.todos });
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
        users={data.users}
        searchFilter={search}
        onDeleteUser={deleteUsersHandler}
        onUpdateUser={updateUsersHandler}
        todos={data.todos}
        posts={data.posts}
        onAddPost={onAddPostHandler}
        onMarkTodoAsCompleted={onMarkTodoAsCompletedHandler}
        onAddTodo={onAddTodoHandler}
      />
    </>
  );
};

export default App
