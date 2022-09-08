import React, { useState } from "react";
import FormHeader from "./FormHeader";

import classes from "./Form.module.css";
// import Fclasses from "./FormFooter.module.css";
import FormTitle from "./FormTitle";
const EmailField = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [invalid, setInvalid] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setInvalid(true);
    }
    const credentials = { email, password };

    //USE testaccount@gmail.com FOR EMAIL
    //USE 12345678 FOR PASSWORD
    const user = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const response = await user.json();
    console.log(response);

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form action="submit" onSubmit={login}>
        <FormHeader />
        <FormTitle />
        <div className={classes.inputContainer}>
          <label htmlFor="username">ENTER YOUR USERNAME</label>
          <input
            type="text"
            id="username"
            value={email}
            placeholder="e.g. thomasgosalves@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="password">ENTER YOUR PASSWORD</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={classes.checkContainer}>
          <input type="checkbox" className={classes.check} />
          <p>Keep me Logged in next time</p>
        </div>
        <div className={classes.footerContainer}>
          <p>Forgot password?</p>
          <button className={classes.btn}>
            <div>Login </div>
            <div className={classes.arrow}>→</div>
          </button>
        </div>
      </form>
    </>
  );
};

export default EmailField;
