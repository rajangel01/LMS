import React from 'react'
// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const YourHistory = () => {
  const [data, setData] = useState([]);
  let count = 1;

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

  const profile = JSON.parse(localStorage.getItem("user"));
  const roll = profile.roll;
  const session = profile.session;
  return (
    <>
      <div className="containerer">
        {/* <div className="container bg-light shadow-sm p-3 mb-5 rounded text-center">
        <center>
            <Link
              className="btn btn-outline-primary my-3"
              type="button"
              to="/yourhistory"
            >
              Generate your history.
            </Link>
          </center>
        </div> */}
        <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Sr. No.</th>
           
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Book</th>
            <th scope="col">Book Number</th>
          </tr>
        </thead>
        {data.map((i) => {
          if(i.roll===roll&&i.session===session){
            return (
              <tbody>
                <tr>
                  <th scope="row">{count++}</th>
                  
                  <td>{i.date}</td>
                  <td>{i.time}</td>
                  <td>{i.bookType}</td>
                  <td>{i.bookNumber}</td>
                </tr>
              </tbody>
            );
          }else{
            return(
              <></>
            );
          }
        })}
      </table>
          </div> 
    </>
  )
}

export default YourHistory
