import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen" className="flex-grow-1">
        <h3>Signin</h3>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="username" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="password" />
        </div>
        <div className="mb-3">
          <Link to="/Kanbas/Dashboard" className="btn btn-primary w-100">Signin</Link>
        </div>
        <Link to="/Kanbas/Account/Signup" className="text-primary">Signup</Link>
    </div>
    
);}
