import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen" className="flex-grow-1">
      <h3>Signup</h3>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="username" />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" placeholder="password" />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" placeholder="verify password" />
      </div>
      <div className="mb-3">
        <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100">Signup</Link>
      </div>
      <Link to="/Kanbas/Account/Signin" className="text-primary">Signin</Link>
    </div>
);}
