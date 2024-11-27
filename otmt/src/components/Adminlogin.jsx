import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Adminlogin.css";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        try {
            const response = await fetch("http://192.168.1.13:8080/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials: "include",
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Login failed");
            }

            const { token, userId } = await response.json();

            if (!token || !userId) {
                throw new Error("Missing token or userId in response body");
            }

            console.log("Response Data:", { token, userId });

            Cookies.set("token", token, { path: "/", secure: true, sameSite: "strict" });
            Cookies.set("userId", userId, { path: "/", secure: true, sameSite: "strict" });

            const userResponse = await fetch(`http://192.168.1.13:8080/users/${userId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!userResponse.ok) {
                throw new Error("Failed to fetch user details");
            }

            const user = await userResponse.json();
            console.log("User Data:", user);

            Cookies.set("user", JSON.stringify(user), { path: "/", secure: true, sameSite: "strict" });

            window.location.replace("/all_tech");
        } catch (error) {
            console.error("Error during login process:", error);
            setErrorMessage(error.message || "An error occurred during login. Please try again.");
        }
    };

    return (
        <div className="login-page">
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default AdminLogin;
