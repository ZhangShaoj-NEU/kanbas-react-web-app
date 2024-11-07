import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div id="signup-container" className="ms-4">
            <h1>Sign up</h1>
            <input
                id="username-input"
                placeholder="Username"
                className="form-control mb-2"
            />
            <input
                id="password-input"
                placeholder="Password"
                type="password"
                className="form-control mb-2"
            />
            <Link
                id="signup-button"
                to="/Kanbas/Account/Profile"
                className="btn btn-primary w-100"
            >
                Sign up
            </Link>
            <br />
            <Link id="signin-link" to="/Kanbas/Account/Signin">
                Already have an account? Sign in
            </Link>
        </div>
    );
}
