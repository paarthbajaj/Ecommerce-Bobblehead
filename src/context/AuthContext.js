import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../backend/db/users";
import { useProductContext } from "./ProductContext";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { toast, setToast } = useProductContext();
  let navigate = useNavigate();
  const guestLoginHandler = async () => {
    try {
      const { data } = await axios.post("/api/auth/login", {
        email: users[0].email,
        password: users[0].password,
      });
      localStorage.setItem("key", data.encodedToken);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
  const signinHandler = async () => {
    try {
      const data = await axios.post("/api/auth/login", {
        email: authState.email,
        password: authState.password,
      });
      localStorage.setItem("key", data.data.encodedToken);
      data.status == "200" && navigate("/home");
    } catch (err) {
      console.log(err);
      setToast({
        ...toast,
        showToast: true,
        type: "alert-danger",
        message: err.response.data.errors[0],
      });
    }
  };
  const signupHandler = async () => {
    try {
      const data = await axios.post("/api/auth/signup", {
        email: authState.email,
        password: authState.password,
        name: authState.name,
        confirm_password: authState.confirm_password,
      });
      localStorage.setItem("key", data.data.encodedToken);
      data.status == "201" && navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
  const authReducer = (state, action) => {
    switch (action.type) {
      case "EDIT_NAME":
        return { ...state, name: action.payload };
      case "EDIT_EMAIL":
        return { ...state, email: action.payload };
      case "EDIT_PASSWORD":
        return { ...state, password: action.payload };
      case "EDIT_CONFIRM_PASSWORD":
        return { ...state, confirm_password: action.payload };
    }
  };
  const [authState, authDispatch] = useReducer(authReducer, {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  return (
    <AuthContext.Provider
      value={{
        guestLoginHandler,
        authState,
        authDispatch,
        signinHandler,
        signupHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
