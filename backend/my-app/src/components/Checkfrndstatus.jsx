import React from "react";
import { useState } from "react";

function Checkfrndstatus() {
  const [roll, setRoll] = useState();
  const [session, setSession] = useState();
  let [name, setName] = useState();
  let [number, setNumber] = useState();
  let [date, setDate] = useState();
  let [time, setTime] = useState();

  const collectData = async () => {
    let result = await fetch("http://localhost:8080/collect-info", {
      method: "post",
      body: JSON.stringify({ roll, session }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    setName(result.bookType);
    setNumber(result.bookNumber);
    setDate(result.date);
    setTime(result.time);
    console.warn(result);
  };
  return (
    <>
      <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded text-center fix-width">
        <input
          className="form-control my-3"
          type="number"
          placeholder="Enter Class Roll Number"
          onChange={(e) => setRoll(e.target.value)}
        />
        <select
          className="form-select"
          onChange={(e) => setSession(e.target.value)}
        >
          <option>Select Session</option>
          <option value="2021 - 24">2021 - 24</option>
          <option value="2022 - 25">2022 - 25</option>
          <option value="2023 - 26">2023 - 26</option>
        </select>
        <input
          className="submit bg-success p-2 my-3"
          type="submit"
          onClick={collectData}
        />
      {/* </div>
      <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded text-center"> */}
        <table className="table table-striped table dark text-start">
          <thead>
          <tr>
            <td>Class Roll Number : - </td>
            <td>{roll}</td>
          </tr>
          <tr>
            <td>Session : - </td>
            <td>{session}</td>
          </tr>
          <tr>
            <td>Taken Book : - </td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Book Number : -</td>
            <td>{number}</td>
          </tr>
          <tr>
            <td>Date : - </td>
            <td>{date}</td>
          </tr>
          <tr>
            <td>Time : - </td>
            <td>{time}</td>
          </tr>
          </thead>
        </table>
      </div>
    </>
  );
}

export default Checkfrndstatus;
