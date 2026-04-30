import React from 'react'

const Status = () => {
    let count = 0;
  const search = async () => {
    const profile = JSON.parse(localStorage.getItem("user"));
    const roll = profile.roll;
    const session = profile.session;
    let result = await fetch("http://localhost:8080/collect-info", {
      method: "post",
      body: JSON.stringify({ roll, session }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (count === 0) {
      if (result.bookType === "0") {
        var tr1 = document.createElement("tr");

        var td = tr1.appendChild(document.createElement("td"));
        td.innerHTML = "Dont have taken any book";
        document.getElementById("tbl1").appendChild(tr1);
      } else {
        var tr = document.createElement("tr");
        var td1 = tr.appendChild(document.createElement("td"));
        var td2 = tr.appendChild(document.createElement("td"));
        var td3 = tr.appendChild(document.createElement("td"));
        var td4 = tr.appendChild(document.createElement("td"));
        td1.innerHTML = result.bookType;
        td2.innerHTML = result.bookNumber;
        td3.innerHTML = result.date;
        td4.innerHTML = result.time;
        document.getElementById("tbl1").appendChild(tr);
      }
      count++;
    }
  };
  return (
    <>
      <div className="containerer">
        <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded">
          <div className="d-grid gap-5">
            <button className="btn btn-primary" type="button" onClick={search}>
              Click to check your status
            </button>
            <h5>Your Status : - </h5>
            <table id="tbl1">
              <thead>
                <th>Book</th>
                <th>Book Number</th>
                <th>Date</th>
                <th>Time</th>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Status
