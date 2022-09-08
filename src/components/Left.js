import React from "react";
import EmailField from "./Form";
import classes from "./Left.module.css";
const Left = () => {
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <EmailField />
      </div>
    </div>
  );
};

export default Left;
