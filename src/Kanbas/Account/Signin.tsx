import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

export default function Signin() {
    const [loginDetails, setLoginDetails] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignin = () => {
        const matchedUser = db.users.find(
            (user: any) =>
                user.username === loginDetails.username && user.password === loginDetails.password
        );
        if (!matchedUser) return;
        dispatch(setCurrentUser(matchedUser));
        navigate("/Kanbas/Dashboard");
    };

    return (
        <div id="signin-container" className="ms-4">
            <h1>Sign in</h1>
            <input
                defaultValue={loginDetails.username}
                onChange={(e) => setLoginDetails({ ...loginDetails, username: e.target.value })}
                className="form-control mb-2"
                placeholder="Username"
                id="username-input"
            />
            <input
                defaultValue={loginDetails.password}
                onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
                className="form-control mb-2"
                placeholder="Password"
                id="password-input"
            />
            <button
                onClick={handleSignin}
                id="signin-button"
                className="btn btn-primary w-100"
            >
                Sign in
            </button>
            <Link id="signup-link" to="/Kanbas/Account/Signup">
                Sign up
            </Link>
        </div>
    );
}
