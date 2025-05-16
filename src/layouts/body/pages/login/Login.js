import React from "react";
import styles from "./login.module.scss"
import "./login.css";

function Login() {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 login-background" style={{ padding: "15px 30px" }}>
            <div className="card py-5 px-5 text-white bg-opacity-75 border-light shadow-lg rocket form-bor" style={{ maxWidth: "600px", width: "100%" }}>
                <div className="text-center mb-4">
                    <h3 className="mt-2">LOGIN</h3>
                    <small>Explore the system</small>
                </div>

                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control bg-dark text-white border-secondary" id="email" placeholder="you@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control bg-dark text-white border-secondary" id="password" placeholder="••••••••" />
                    </div>
                    <button type="submit" className="btn btn-outline-light w-100 mt-3 bg-light" style={{ color: "black" }}>Launch 🚀</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
