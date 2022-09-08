import React from "react";
import classes from "./FormTitle.module.css";
const FormTitle = () => {
  return (
    <div className={classes.container}>
      <h2>
        <span className={classes.name}>Sign in to</span> Nestb
      </h2>
    </div>
  );
};

export default FormTitle;
