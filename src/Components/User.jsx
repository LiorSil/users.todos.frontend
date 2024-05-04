import  { useState } from "react";
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
  const [isDataClicked, setIsDataClicked] = useState(null);

  const toggleOtherDataWindow = (status) => {
    setIsOtherDataWindowOpen(status);
  };

  const handleUpdateUser = () => {
    onUpdateUser(id, userDetails.name, userDetails.email);
  };

  const handleAddTodo = (title) => {
    const todo = {
      userId: id,
      id: Math.floor(Math.random() * 1000),
      title: title,
      completed: false,
    };
    onAddTodo(todo);
  };

  const handleAddPost = (title, body) => {
    const post = {
      userId: id,
      id: Math.floor(Math.random() * 1000),
      title: title,
      body: body,
    };
    onAddPost(post);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Card selected={selected}>
        {/* User details */}
        <label
          className={classes.card_label}
          onClick={() => onSelectUser(id)}
          style={{ cursor: "pointer" }}
        >
          User ID: {id}
        </label>
        <input
          className={classes.card_input}
          style={{ background: "lightgrey" }}
          type="text"
          value={userDetails.name}
          onChange={(e) =>
            setUserDetails({ ...userDetails, name: e.target.value })
          }
        />
        <input
          className={classes.card_input}
          type="text"
          value={userDetails.email}
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
        />

        {/* Other Data */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            className={classes.card_btn}
            style={{ backgroundColor: "LightGrey" }}
            onMouseOver={() => toggleOtherDataWindow(true)}
          >
            Other Data
          </button>
          {isOtherDataWindowOpen && (
            <OtherData
              street={address.street}
              city={address.city}
              zipcode={address.zipcode}
              onClickOtherData={() => toggleOtherDataWindow(false)}
            />
          )}
          {/* Buttons */}

          <button className={classes.card_btn} onClick={handleUpdateUser}>
            Update
          </button>
          <button className={classes.card_btn} onClick={() => onDeleteUser(id)}>
            Delete
          </button>
        </div>
      </Card>
      {/* User actions */}
      {selected && (
        <div style={{ display: "block" }}>
          {/* Add Todo button */}
          {isDataClicked !== "Todo" && isDataClicked !== "Post" && (
            <button
              className={classes.card_btn}
              onClick={() => setIsDataClicked("Todo")}
            >
              Add Todo
            </button>
          )}
          {/* Add Post button */}
          {isDataClicked !== "Todo" && isDataClicked !== "Post" && (
            <button
              className={classes.card_btn}
              onClick={() => setIsDataClicked("Post")}
            >
              Add Post
            </button>
          )}
          {/* Render AddTodo or AddPost component based on the mode */}
          {(isDataClicked === "Todo" || isDataClicked === "Post") && (
            <>
              {isDataClicked === "Todo" && (
                <AddTodo
                  onClickCancel={() => setIsDataClicked(null)}
                  onAddTodo={handleAddTodo}
                />
              )}
              {isDataClicked === "Post" && (
                <AddPost
                  onClickCancel={() => setIsDataClicked(null)}
                  onAddPost={handleAddPost}
                />
              )}
            </>
          )}
          {/* Render TodosList and PostsList if neither Todo nor Post mode is active */}
          {isDataClicked !== "Todo" && isDataClicked !== "Post" && (
            <>
              <TodosList
                todos={todos}
                onMarkTodoAsCompleted={onMarkTodoAsCompleted}
              />
              <PostsList posts={posts} />
            </>
          )}
        </div>
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
