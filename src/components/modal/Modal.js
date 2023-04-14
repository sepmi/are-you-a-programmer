import { Fragment } from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <Fragment>
      <div className={classes.back}></div>
      <div className={classes.modal}>{props.children}</div>
    </Fragment>
  );
};

export default Modal;
