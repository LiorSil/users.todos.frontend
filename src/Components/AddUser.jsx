import { useState } from "react";
import classes from "./CSS/Card.module.css";
import Card from "./Card";
import { isEmailValid, isNameValid } from "../Utils/validators";

import PropTypes from "prop-types";

const AddUser = ({ onCancelAddUser, onAddUser }) => {
  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    city: "",
    street: "",
    zipcode: "",
  });

  const onChangeHandler = (e) => {
    setNewUserData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate inputs
    if (!newUserData.name || !newUserData.email) {
      alert("Name and email are required");
      return;
    }
    if (!newUserData.city || !newUserData.street || !newUserData.zipcode) {
      alert("City, street, and zipcode are required");
      return;
    }
    if (!isNameValid(newUserData.name)) {
      alert("Name is invalid");
      return;
    }
    if (!isEmailValid(newUserData.email)) {
      alert("Email is invalid");
      return;
    }

    // Add user
    onAddUser({
      id: Math.floor(Math.random() * 1000),
      name: newUserData.name,
      email: newUserData.email,
      address: {
        city: newUserData.city,
        street: newUserData.street,
        zipcode: newUserData.zipcode,
      },
    });
  };

  return (
    <Card className={classes.card}>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.group}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required onChange={onChangeHandler} />
        </div>
        <div className={classes.group}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required onChange={onChangeHandler} />
        </div>
        <div className={classes.group}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" required onChange={onChangeHandler} />
        </div>
        <div className={classes.group}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" required onChange={onChangeHandler} />
        </div>
        <div className={classes.group}>
          <label htmlFor="zipcode">Zipcode</label>
          <input type="text" id="zipcode" required onChange={onChangeHandler} />
        </div>

        <div className={classes.group}>
          <button className={classes.card_btn} type="submit">
            Add User
          </button>
          <button
            className={classes.card_btn}
            type="button"
            onClick={onCancelAddUser}
          >
            Cancel
          </button>
        </div>
      </form>
    </Card>
  );
};

AddUser.propTypes = {
  onCancelAddUser: PropTypes.func.isRequired,
  onAddUser: PropTypes.func.isRequired,
};

export default AddUser;
