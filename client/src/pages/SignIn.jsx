import React from "react";

function SignIn() {
  return (
    <form>
      <h1>Sign in with your existing account</h1>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="password">Password:</label>
      <input type="text" name="password" id="password" />
    </form>
  );
}

export default SignIn;
