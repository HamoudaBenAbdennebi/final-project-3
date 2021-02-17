import React from "react";
import "../style.css";
const Form = () => {
  return (
    <div className="form">
      <input type="text" placeholder="username" />
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button>send</button>
    </div>
  );
};

export default Form;
