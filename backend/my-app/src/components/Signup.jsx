import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState("");
  const [roll, setRoll] = useState("");
  const [dob, setDob] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/home");
    }
  });

  const collectData = async () => {
    console.warn(name, email, mobile, password, session, roll, dob);
    let result = await fetch("http://localhost:8080/register", {
      method: "post",
      body: JSON.stringify({
        name,
        email,
        mobile,
        password,
        session,
        roll,
        dob,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate("/home");
      window.location.reload();
    }
  };

  return (
    <>
      <div className="containerer">
        <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded fix-width">
          <h1 className="mx-auto p-3">Signup</h1>
          <input
            className="form-control my-1"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <input
            className="form-control my-1"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <label htmlFor="" className="my-2">
            Enter your mobile number for OTP varification.
          </label>
          <input
            className="form-control my-1"
            type="tel"
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your Mobile Number"
          />
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setSession(e.target.value)}
          >
            <option>Select Your Session</option>
            <option value="2021 - 24">2021 - 24</option>
            <option value="2022 - 25">2022 - 25</option>
            <option value="2023 - 26">2023 - 26</option>
          </select>

          <input
            className="form-control my-1"
            type="number"
            onChange={(e) => setRoll(e.target.value)}
            placeholder="Enter your Class Roll Number"
          />

          <label htmlFor="" className="my-2">
            Enter your Date of Birth
          </label>
          <input
            className="form-control my-1"
            type="date"
            onChange={(e) => setDob(e.target.value)}
            placeholder="Enter your Date of Birth"
          />
          <input
            className="form-control my-1"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Set your password"
          />
          <div className="submit my-3">
            <input
              className="submit  bg-success p-2"
              type="submit"
              onClick={collectData}
            />
            </div>
            <p className="my-3">
              {" "}
              Already have an Account <Link to="/login">
                Login
              </Link> now...!!!{" "}
            </p>
          
        </div>
      </div>
    </>
  );
}

export default Signup;
