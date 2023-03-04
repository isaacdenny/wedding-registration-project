import React from 'react'

const LoginSection = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const API_URL = process.env.REACT_APP_API_URL

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Please fill out all fields");
      return;
    }
    fetch(`${API_URL}admin/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: username, pass: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length <= 0) {
          alert("Username or password is incorrect");
          return;
        }
      });
  };
  return (
    <div className="form-section-container">
      <div className="form-container">
        <h1 className="form-title">If You Are Not A Denny, Turn Back Now</h1>
        Login below with username and password.
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" className="form-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginSection