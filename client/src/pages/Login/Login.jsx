import React, { useEffect } from "react";
import { Layout } from "../../component/Layout.jsx";
import image from "../../images/login.png";
import { useNavigate, Link } from "react-router-dom";
import "../Register/Register.css";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [payload, setPayload] = React.useState({
    userName: "",
    password: " ",
  });

  const navigate = useNavigate();

  const sendInput = async () => {
    try {
      let response = await axios.post(
        "http://localhost:8080/api/v1/user/login", // //https://payinstacard.onrender.com
        payload
      );

      //navigate
      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data));
        toast.success("Welcom " + response.data.user.name);

        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      toast(e);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Layout>
      <div className="register-main-container">
        <div className="left-container">
          <img src={image} alt="developer" />
        </div>
        <div className="right-container">
          <div className="title">Login</div>
          <div className="user-container">
            <div className="user-details">
              <div className="input-box">
                <span className="details">UserName</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  required
                  onChange={(e) =>
                    setPayload({ ...payload, userName: e.target.value })
                  }
                ></input>
              </div>

              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  onChange={(e) =>
                    setPayload({ ...payload, password: e.target.value })
                  }
                ></input>
              </div>
            </div>

            <div
              className="direct-to-register"
              style={{ textAlign: "start", marginTop: "5px" }}
            >
              <span>if not user </span>
              <Link to="/register">register</Link>
            </div>

            <div className="button">
              <input type="submit" value={"Login"} onClick={sendInput} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
