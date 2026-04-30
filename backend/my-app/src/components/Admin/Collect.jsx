import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Collect() {
  const [roll, setRoll] = useState();
  const [session, setSession] = useState();

  const navigate = useNavigate();

  const checkDetail = async () => {
    let result = await fetch("http://localhost:8080/collect-info", {
      method: "post",
      body: JSON.stringify({ roll, session }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = result.json();
    console.warn(result)
    // let details = JSON.parse(result);
    // console.log(details)
  };
  const collectData = async () => {
    let result = await fetch("http://localhost:8080/delete", {
      method: "post",
      body: JSON.stringify({roll, session}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.warn(result);
    if(result){
      alert("Collected Successfully");
      navigate("/admin");
    }
  };

  return (
    <>
      <div className="containerer">
        <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded fix-width">
          <input
            type="number"
            className="form-control my-1"
            placeholder="Enter Class Roll Number"
            onChange={(e) => setRoll(e.target.value)}
          />
          <select
            className="form-select my-2"
            onChange={(e) => setSession(e.target.value)}
          >
            <option value="">Select Session</option>
            <option value="2021 - 24">2021 - 24</option>
            <option value="2022 - 25">2022 - 25</option>
            <option value="2023 - 26">2023 - 26</option>
          </select>
          <input
            type="submit"
            className="submit bg-success p-2"
            onClick={collectData}
          />
          <div className="submit">
            <button
              type="check"
              className="submit bg-success p-2"
              onClick={checkDetail}
            >
              Check Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Collect;
