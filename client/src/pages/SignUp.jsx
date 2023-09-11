import axios from "axios";
import React, { useEffect, useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    // sends post request
    try {
      const response = await axios.post("/api/user/signup", {
        username,
        password,
      });
      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  //   useEffect(() => {}, []);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign up!</h1>
      <label htmlFor="username">Username:</label>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
        name="username"
        id="username"
      />
      <label htmlFor="password">Password:</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        name="password"
        id="password"
      />
      <label htmlFor="passwordCheck">Re-enter Password:</label>
      <input
        onChange={(e) => setPasswordCheck(e.target.value)}
        value={passwordCheck}
        type="password"
        name="passwordCheck"
        id="passwordCheck"
      />
      <button>Submit</button>
    </form>
  );
}

export default SignUp;
