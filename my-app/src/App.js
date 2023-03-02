import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    const response = await axios.get('https://reqres.in/api/users?page=1');
    setUsers(response.data.data);
    setLoading(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <span className="navbar-brand">bubble</span>
        <button className="btn btn-primary" onClick={getUsers}>
          Get Users
        </button>
      </nav>
      {loading ? (
        <div className="loader">
          <span>Loading...</span>
        </div>
      ) : (
        <div className="user-grid">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <h2>
                {user.first_name} {user.last_name}
              </h2>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
