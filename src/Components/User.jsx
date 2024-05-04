import React from "react";
import { useState } from "react";

import PropTypes from "prop-types";
import classes from "./CSS/Card.module.css";
import Card from "./Card";
import OtherData from "./OtherData";
import TodosList from "./TodosList";
import PostsList from "./PostsList";
import AddPost from "./AddPost";
import AddTodo from "./AddTodo";

const User = ({
  name,
  email,
  address,
  id,
  onDeleteUser,
  onUpdateUser,
  onSelectUser,
  selected,
  todos,
  onMarkTodoAsCompleted,
  onAddTodo,
  posts,
  onAddPost,
}) => {
  const [isOtherDataWindowOpen, setIsOtherDataWindowOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({ name, email });
  const [isPostClicked, setIsPostClicked] = useState(false);
  const [isTodoClicked, setIsTodoClicked] = useState(false);

  const toggleOtherDataWindow = () => {
    setIsOtherDataWindowOpen(!isOtherDataWindowOpen);
  };

  const onAddTodoHandler = (title) => {
    const todo = {
      userId: id,
      id: Math.floor(Math.random() * 1000),
      title: title,
      completed: false,
    };
    onAddTodo(todo);
  };

  const onAddPostHandler = (title, body) => {
    const post = {
      userId: id,
      id: Math.floor(Math.random() * 1000),
      title: title,
      body: body,
    };
    onAddPost(post);
  };

  const UserTP = (
    <div style={{ display: "block" }}>
      <button
        onClick={() => {
          setIsTodoClicked(true);
        }}
        className={classes.card_btn}
      >
        Add Todo
      </button>
      <TodosList todos={todos} onMarkTodoAsCompleted={onMarkTodoAsCompleted} />
      <button
        onClick={() => {
          setIsPostClicked(true);
        }}
        className={classes.card_btn}
      >
        Add Post
      </button>
      <PostsList
        posts={posts}
        onAddPost={() => {
          return;
        }}
      />
    </div>
  );

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Card selected={selected}>
        <label
          className={classes.card_label}
          onClick={() => onSelectUser(id)}
          style={{ cursor: "pointer" }}
        >
          user ID:{" "}
        </label>
        <input
          className={classes.card_input}
          style={{ background: "lightgrey" }}
          type="text"
          defaultValue={id}
          disabled
        />
        <label className={classes.card_label}>Name: </label>
        <input
          className={classes.card_input}
          type="text"
          defaultValue={userDetails.name}
          onChange={(e) =>
            setUserDetails({ ...userDetails, name: e.target.value })
          }
        />
        <label className={classes.card_label}>Email: </label>
        <input
          className={classes.card_input}
          type="text"
          defaultValue={userDetails.email}
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
        />
        <div>
          {/* OtherData Button */}
          <button
            className={classes.card_btn}
            //add background color to button
            style={{ backgroundColor: "LightGrey" }}
            onMouseOver={() => setIsOtherDataWindowOpen(true)}
          >
            Other Data
          </button>
          {isOtherDataWindowOpen && (
            <OtherData
              street={address.street}
              city={address.city}
              zipcode={address.zipcode}
              onClickOtherData={toggleOtherDataWindow}
            ></OtherData>
          )}
          {/*  Update Button */}
          <button
            className={classes.card_btn}
            id={id}
            onClick={() =>
              onUpdateUser(id, userDetails.name, userDetails.email)
            }
          >
            Update
          </button>
          {/* Delete Button */}
          <button
            className={classes.card_btn}
            id={id}
            onClick={() => onDeleteUser(id)}
          >
            Delete
          </button>
        </div>
      </Card>
      {/* case1 : click the ID present todos & post  */}
      {selected && !isPostClicked && !isTodoClicked && UserTP}
      {/* case2 : click the Add Todo button */}
      {selected && isTodoClicked && (
        <AddTodo
          onClickCancel={() => setIsTodoClicked(false)}
          onAddTodo={onAddTodoHandler}
        />
      )}
      {/* case3 : click the Add Post button */}
      {selected && isPostClicked && (
        <AddPost
          onClickCancel={() => setIsPostClicked(false)}
          onAddPost={onAddPostHandler}
        />
      )}
    </div>
  );
};

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSelectUser: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
  onMarkTodoAsCompleted: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  onAddPost: PropTypes.func.isRequired,
};

export default User;
