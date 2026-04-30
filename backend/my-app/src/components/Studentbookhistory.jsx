import React from 'react'
import { useEffect, useState } from 'react';

function Studentbookhistory() {
    const [data,setData] = useState([]);
  let count = 1;
  let profile = localStorage.getItem("user");
  const session = profile.session;
  const roll = profile.roll;

  useEffect(()=>{
    fetch("http://localhost:8080/currentstatus", {
      method:"GET",
    })
    .then((res) => res.json())
    .then((data) => {
      console.warn(data,"History");
      setData(data.data);
    });
  }, []);
  return (
    <>
        <h1>Your History</h1>
        <table className='table table-dark table-striped'>
        <thead>
          <tr>
            <th scope='col'>Sr. No.</th>
            
            <th scope='col'>
              Date
            </th>
            <th scope='col'>
              Time
            </th>
            <th scope='col'>
              Book
            </th>
            <th scope='col'>
              Book Number
            </th>
          </tr>
          </thead>
          {data.map(i=>{
              if(session===i.session && roll===i.roll){
            return(
              <tbody>
              <tr>
                <th scope='row'>{count++}</th>
                
                <td>{i.date}</td>
                <td>{i.time}</td>
                <td>{i.bookType}</td>
                <td>{i.bookNumber}</td>
              </tr>
              </tbody>
            )}else{
                return(
                    <></>
                )
                
            }
          })}
        
      </table>
    </>
  );
}

export default Studentbookhistory
