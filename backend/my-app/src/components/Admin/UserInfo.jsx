import React from "react";
import { useEffect, useState } from "react";

const UserInfo = () => {
  const [data, setData] = useState([]);
  let count = 1;

  useEffect(() => {
    fetch("http://localhost:8080/totalusers", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.warn(data, "History");
        setData(data.data);
      });
  }, []);
  return (
    <div className="containerer d-block">
      <h1 className="text-primary">All Users Information.</h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Sr. No.</th>
            <th scope="col">Name</th>
            <th scope="col">Roll</th>
            <th scope="col">Session</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Password</th>
            <th scope="col"> D.O.B</th>
          </tr>
        </thead>
        {data.map((i) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{count++}</th>
                <td>{i.name}</td>
                <td>{i.roll}</td>
                <td>{i.session}</td>
                <td>{i.email}</td>
                <td>{i.mobile}</td>
                <td>{i.password}</td>
                <td>{i.dob}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default UserInfo;
