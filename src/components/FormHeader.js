import React from "react";
import classes from "./FormHeader.module.css";
const FormHeader = () => {
  return (
    <div className={classes.headerContainer}>
      <svg height="90" width="50">
        <path
          fill="#534CF6"
          fill-rule="nonzero"
          d="M30.017 17.842a.468.468 0 0 0 0-.662L17.439 4.592a.467.467 0 0 0-.662 0L12.144 9.23a.47.47 0 0 0 0 .663l12.908 12.92 4.965-4.97zM15.009 39.26v25.404l12.69-12.702L15.01 39.26zm0-6.397l7.395-7.402-7.395-7.401v14.803zm-5.223-20.03l-.29-.291a4.22 4.22 0 0 1 0-5.963l4.633-4.637a4.21 4.21 0 0 1 5.958 0l12.577 12.587a4.218 4.218 0 0 1 0 5.963l-4.964 4.97 12.578 12.587a4.688 4.688 0 0 1 0 6.625l-9.93 9.938-15.888 15.9-6.596 6.603C5.21 79.77.673 77.889.673 74.133v-49.85c0-1.49.591-2.92 1.644-3.975l7.47-7.475zM37.63 40.7L25.052 28.111l-7.944 7.95 13.24 13.251 7.281-7.287a.938.938 0 0 0 0-1.326zM11.264 16.655l-6.299 6.303c-.35.351-.548.828-.548 1.325v49.85c0 .417.504.626.8.331l6.047-6.053V16.655z"
        ></path>
      </svg>
      <p>
        Don't have an account?{" "}
        <span className={classes.link}>Sign up first</span>
      </p>
    </div>
  );
};

export default FormHeader;
