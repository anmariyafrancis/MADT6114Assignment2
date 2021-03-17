import React from "react";
import ReactDOM from "react-dom";

function LoginForm(props) {
  const nameEl = React.useRef(null);
  const passwordEl = React.useRef(null);
  const rememberMeEl = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: nameEl.current.value,
      password: passwordEl.current.value,
      rememberMe: rememberMeEl.current.checked
    };
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="username" ref={nameEl} />
      <input type="password" placeholder="password" ref={passwordEl} />
      <label>
        <input type="checkbox" ref={rememberMeEl} />
        Remember me
      </label>
      <button type="submit" className="myButton">
        Login
      </button>
    </form>
  );
}

ReactDOM.render(
  <div>
    <LoginForm />
  </div>,
  document.getElementById("root")
);
