import { Link } from "react-router-dom";
import { AuthHeader } from "../components/AuthHeader";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

export const Signup = () => {
  const { authDispatch, signupHandler, authState } = useAuth();
  return (
    <>
      <AuthHeader />
      <main className="log-main m-radius">
        <h1 className="txt-center pb-1">Sign Up to Quirky Face</h1>
        <form className="log-form flex-column g-1 align-center justify-center">
          <label className="log-input">
            <input
              className="input log-input"
              type="text"
              placeholder="Name"
              required
              onChange={(e) =>
                authDispatch({ type: "EDIT_NAME", payload: e.target.value })
              }
            />
            <span className="error">Please enter your name</span>
          </label>
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
          <label className="log-input">
            <input
              className="input log-input"
              type="password"
              placeholder="Confirm Password"
              required
              onChange={(e) =>
                authDispatch({
                  type: "EDIT_CONFIRM_PASSWORD",
                  payload: e.target.value,
                })
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
              authState.name !== "" ||
              authState.email !== "" ||
              authState.password !== "" ||
              authState.confirm_password !== "" ? (
                signupHandler()
              ) : (
                <></>
              );
            }}
          >
            Sign Up
          </button>
          <span className="or-divider">OR</span>
          <Link to="/">
            <button type="button" className="btn btn-secondary">
              Sign In
            </button>
          </Link>
        </form>
      </main>
    </>
  );
};
