import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <>
      <form action="#" method="post" name="sign up for beta form">
        <div class="header">
          <p>Sign Up For Beta</p>
        </div>
        <div class="description">
          <p>
            Milkshake is almost ready. If you're interested in testing it out,
            then sign up below to get exclusive access.
          </p>
        </div>
        <div class="input">
          <input
            type="text"
            class="button"
            id="email"
            name="email"
            placeholder="NAME@EXAMPLE.COM"
          />
          <input type="submit" class="button" id="submit" value="SIGN UP" />
        </div>
      </form>
    </>
  );
}

export default SignUp;
