import React, {  useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5002/signup", {
        email,
        password,
      });
    
       if (response.data.token) {
      console.log("Hi")
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
