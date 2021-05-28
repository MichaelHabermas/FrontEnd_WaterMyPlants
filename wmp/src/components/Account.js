import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialCredentials = {
  username: "",
  password: "",
  phone_number: null,
};

function Account(props) {
  const { push } = useHistory();
  const [personToEdit, setPersonToEdit] = useState(initialCredentials);

  const handleChange = (e) => {
    setPersonToEdit({
      ...personToEdit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(
        `https://ft-water-my-plants-3.herokuapp.com/api/users/${props.user_id}`,
        personToEdit
      )
      .then((res) => {
        localStorage.removeItem("token");
        push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>Account Page</h1>
      <form id="accountCardInfo">
        <label>
          {" "}
          Username
          <input
            type="text"
            name="username"
            id="username"
            value={personToEdit.username}
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          Password
          <input
            type="text"
            name="password"
            id="password"
            value={personToEdit.password}
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          Phone Number
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            value={personToEdit.phone_number}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>Update Account</button>
      </form>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
    userId: state.userId,
  };
};

export default connect(mapStateToProps)(Account);
