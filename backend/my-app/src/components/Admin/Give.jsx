import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Give() {
  const [roll, setRoll] = useState();
  const [session, setSession] = useState();
  const [bookType, setBookType] = useState();
  const [bookNumber, setBookNumber] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  const navigate = useNavigate();

  const collectData = async () => {
    let result = await fetch("http://localhost:8080/give", {
      method: "post",
      body: JSON.stringify({ roll, session, bookType, bookNumber, time, date }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result2 = await fetch("http://localhost:8080/history", {
      method: "post",
      body: JSON.stringify({ roll, session, bookType, bookNumber, time, date }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result && result2) {
      alert("Book Given Successfully");
      navigate("/admin");
    }
  };

  const adminPanel = () => {
    navigate("/admin");
  };

  return (
    <>
      <div className="containerer d-block">
        <div className="space"></div>
        <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded fix-width">
          <input
            type="number"
            className="form-control my-1"
            placeholder="Enter class roll number"
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
          <div className="form-floating">
            <select
              className="form-select my-2"
              id="floatingSelect"
              aria-label="Floating label select example"
              onChange={(e) => setBookType(e.target.value)}
            >
              <option value="">Kindly select the book type</option>
              <option value="DBMS">Database management System (DBMS)</option>
              <option value="C">C Programming</option>
              <option value="OOPS">OOPS in C++</option>
              <option value="DS">Data Structure</option>
              <option value="Acc">Accounting</option>
              <option value="Java">Java</option>
              <option value="FoxPro">FoxPro</option>
              <option value="PC Package">PC Package</option>
              <option value="VB">Visual Basic</option>
              <option value="RDBMS">RDBMS</option>
              <option value="Fundamental">Computer Fundamental</option>
              <option value="PLDT">PLDT</option>
              <option value="CE">Communicative English</option>
              <option value="OS">Operating System</option>
              <option value="IT">Information Technology and Trends</option>
              <option value="SAD">SAD</option>
              <option value="EC">E-Commerce</option>
              <option value="Com Dcom">COM-DCOM</option>
              <option value="Linux">Linux Operating Syatem</option>
              <option value="Networking">Computer Networking and LAN</option>
              <option value="Management">Management</option>
            </select>
            <label htmlFor="floatingSelect">Select the book name</label>
          </div>
          <input
            type="number"
            className="form-control my-1"
            placeholder="Enter book number"
            onChange={(e) => setBookNumber(e.target.value)}
          />

          <h5>Optional fields : -</h5>
          <p>Enter the current time (in 24 hour formate)</p>
          <input
            type="time"
            className="form-control my-1"
            onChange={(e) => setTime(e.target.value)}
          />
          <p>Enter the current date</p>
          <input
            type="date"
            className="form-control my-1"
            onChange={(e) => setDate(e.target.value)}
          />
          <div className="submit my-3">
            <input
              type="submit"
              className="submit bg-success p-2"
              onClick={collectData}
            />
          </div>
        
        <center>
          <button
            type="button"
            className="btn bg-success submit"
            onClick={adminPanel}
          >
            Cancel Book Giving
          </button>
        </center>
        </div>
      </div>
    </>
  );
}

export default Give;
