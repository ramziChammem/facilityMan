import React from "react";

function SignInUp() {
  return (
    <div className="signInUpContainer" id="signInUpMain">
      <div className="signUp">
        <form action="#">
          <h1>Create Account</h1>
          <input type="text" name="txt" placeholder="Name" required="" />
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required=""
          />
          <button>SIgn Up</button>
        </form>
      </div>
    </div>
  );
}
export default SignInUp;
