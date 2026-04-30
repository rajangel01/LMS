import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Studentstatus() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  let count = 1;

  const adminPanel = ()=>{
    navigate("/admin");
  }

  useEffect(() => {
    fetch("http://localhost:8080/totalcurrent", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.warn(data, "History");
        setData(data.data);
      });
  }, []);
  return (
    <div>
      <h1>Total History</h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Sr. No.</th>
            <th scope="col">Session</th>
            <th scope="col">Roll</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Book</th>
            <th scope="col">Book Number</th>
            {/* <th scope="col">Returned Date</th> */}
          </tr>
        </thead>
        {data.map((i) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{count++}</th>
                <td>{i.session}</td>
                <td>{i.roll}</td>
                <td>{i.date}</td>
                <td>{i.time}</td>
                <td>{i.bookType}</td>
                <td>{i.bookNumber}</td>
                {/* <td>{i.returned}</td> */}
              </tr>
            </tbody>
          );
        })}
      </table>
      <center><button type="button" className="btn bg-success submit" onClick={adminPanel}>Back to admin panel</button></center>
    </div>
  );
}

export default Studentstatus;
