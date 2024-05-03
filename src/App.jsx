import React from 'react'
import { useState } from 'react';

import { posts, users, todos } from "./Data/fetchData";
import UsersList from './Components/UsersList';
import SearchBar from "./Components/SearchBar";
import {
  deleteUser,
  updateUser,
  markTodoAsCompleted,
  addTodoToUser,
  addPostToUser
} from "./Utils/crudActionsUPT";

const App =  () => {  
const [search, setSearch] = useState("");  
const [data, setData] = useState({users, posts, todos})


const deleteUsersHandler = (userId) => {
  const [newUsers, newPosts, newTodos] = deleteUser(userId, data.users, data.posts, data.todos);
  const ok = confirm("Are you sure you want to delete this user?");
  if (!ok) return;
  setData({users: newUsers, posts: newPosts, todos: newTodos});
  alert("User deleted successfully");
}
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
}

  const onMarkTodoAsCompletedHandler = (todoId) => {
    const updatedTodos = markTodoAsCompleted(todoId, data.todos);
    setData({ users: data.users, posts: data.posts, todos: updatedTodos });
  };

  const onAddTodoHandler = (todo) => {
    const ok = confirm("Are you sure you want to add this todo?");
    if (!ok) return;
    const updatedTodos = addTodoToUser(data.todos, todo)
    setData({ users: data.users, posts: data.posts, todos: updatedTodos });
    alert("Todo added successfully");
  }

  const onAddPostHandler = (post) => {
    const ok = confirm("Are you sure you want to add this post?");
    if (!ok) return;
    const updatedPosts = addPostToUser(data.posts, post)
    setData({ users: data.users, posts: updatedPosts, todos: data.todos });
    alert("Post added successfully");
  }
  



const searchHandler = (e) => {
    setSearch(e.target.value);
  }

  return (
    <>
      <SearchBar onSearch={searchHandler} />
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
}

export default App
