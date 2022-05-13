import { Link } from "react-router-dom";
import { AuthHeader } from "../components/AuthHeader";

export const Signout = () => {
  return (
    <>
      <AuthHeader />
      <div className="flex-column align-center centre-1">
        <h1>Hope you have enjoyed shopping with us! 😁</h1>
        <Link to="/">
          <button type="button" className="ecom-pri-btn">
            Sign In Again!
          </button>
        </Link>
      </div>
    </>
  );
};
