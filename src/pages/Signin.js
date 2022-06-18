import { Link } from "react-router-dom";
import { AuthHeader } from "../components/AuthHeader";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

export const Signin = () => {
  const { guestLoginHandler, authDispatch, signinHandler, authState } =
    useAuth();
  return (
    <>
      <AuthHeader />
      <main className="log-main m-radius">
        <h1 className="txt-center pb-1">Login to your account</h1>
        <form className="log-form flex-column g-1 align-center justify-center">
          <label className="log-input">
            <input
              className="input log-input"
              type="email"
              placeholder="Email"
              required
              onChange={(e) =>
                authDispatch({ type: "EDIT_EMAIL", payload: e.target.value })
              }
            />
            <span className="error">Please enter your email</span>
          </label>
          <label className="log-input">
            <input
              className="input log-input"
              type="password"
              placeholder="Password"
              required
              onChange={(e) =>
                authDispatch({ type: "EDIT_PASSWORD", payload: e.target.value })
              }
            />
            <span className="error">
              Password must contain eight characters, at least one letter, one
              number and one special character
            </span>
          </label>
          <button
            className="ecom-pri-btn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              authState.email !== "" || authState.password !== "" ? (
                signinHandler()
              ) : (
                <></>
              );
            }}
          >
            Sign In
          </button>
          <span className="cursor-pointer" onClick={guestLoginHandler}>
            Login as guest
          </span>
          <span className="or-divider">OR</span>
          <Link to="/signup">
            <button type="button" className="btn btn-secondary">
              Sign Up
            </button>
          </Link>
        </form>
      </main>
    </>
  );
};
