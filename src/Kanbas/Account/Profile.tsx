import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-5" style={{ maxWidth: '400px' }}>
      <h3>Profile</h3>
      <div className="mb-3">
        <input
          defaultValue="alice"
          placeholder="username"
          className="form-control"
          type="text"
        />
      </div>
      <div className="mb-3">
        <input
          defaultValue="123"
          placeholder="password"
          className="form-control"
          type="password"
        />
      </div>
      <div className="mb-3">
        <input
          defaultValue="Alice"
          placeholder="First Name"
          className="form-control"
          type="text"
        />
      </div>
      <div className="mb-3">
        <input
          defaultValue="Wonderland"
          placeholder="Last Name"
          className="form-control"
          type="text"
        />
      </div>
      <div className="mb-3">
        <input
          defaultValue="2000-01-01"
          className="form-control"
          type="date"
        />
      </div>
      <div className="mb-3">
        <input
          defaultValue="alice@wonderland.com"
          placeholder="Email"
          className="form-control"
          type="email"
        />
      </div>
      <div className="mb-3">
        <select defaultValue="USER" className="form-control">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>
      <div className="mb-3">
        <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100">
          Signout
        </Link>
      </div>
    </div>
  );
}
