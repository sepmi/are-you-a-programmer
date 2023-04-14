import { useState } from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const [inputItem, setInputItem] = useState("");

  const inputSubmitHandler = (e) => {
    e.preventDefault();

    if (inputItem) {
      props.onName(inputItem);
    }

    setInputItem("");
  };

  const inputChangeHandler = (e) => {
    setInputItem(e.target.value);
  };

  return (
    <form onSubmit={inputSubmitHandler} className={classes.form}>
      <label>Are you a programmer?</label>
      <input
        type="text"
        name="inputText"
        onChange={inputChangeHandler}
        value={inputItem}
        placeholder="Type your name"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default Input;
