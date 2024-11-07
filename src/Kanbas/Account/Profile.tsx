import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [profile, setProfile] = useState<any>({});

    const initializeProfile = () => {
        if (!currentUser) {
            navigate("/Kanbas/Account/Signin");
        } else {
            setProfile(currentUser);
        }
    };

    const handleSignout = () => {
        dispatch(setCurrentUser(null));
        navigate("/Kanbas/Account/Signin");
    };

    useEffect(() => {
        initializeProfile();
    }, []);

    return (
        <div className="profile-container">
            <h3>User Profile</h3>
            {profile && (
                <div>
                    <input
                        defaultValue={profile.username}
                        className="form-control mb-2"
                        id="username-input"
                        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                    />
                    <input
                        defaultValue={profile.password}
                        className="form-control mb-2"
                        id="password-input"
                        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                    />
                    <input
                        defaultValue={profile.firstName}
                        className="form-control mb-2"
                        id="firstname-input"
                        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                    />
                    <input
                        defaultValue={profile.lastName}
                        className="form-control mb-2"
                        id="lastname-input"
                        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                    />
                    <input
                        type="date"
                        defaultValue={profile.dob}
                        className="form-control mb-2"
                        id="dob-input"
                        onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                    />
                    <input
                        defaultValue={profile.email}
                        className="form-control mb-2"
                        id="email-input"
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    />
                    <select
                        value={profile.role}
                        className="form-control mb-2"
                        id="role-select"
                        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                    >
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button
                        onClick={handleSignout}
                        className="btn btn-danger w-100 mb-2"
                        id="signout-button"
                    >
                        Sign out
                    </button>
                </div>
            )}
        </div>
    );
}
