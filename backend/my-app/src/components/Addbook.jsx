import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Addbook() {
  const [bookType, setbookType] = useState("");
  const [bookName, setbookName] = useState("");
  const [quantity, setquantity] = useState("");
  const [pages, setpages] = useState("");
  const [auther, setauther] = useState("");
  const [sem, setsem] = useState("");
  const [price, setPrice] = useState();

  const navigate = useNavigate();

  const adminPanel = () => {
    navigate("/admin");
  };

  const storeData = async () => {
    let result = await fetch("http://localhost:8080/add-book", {
      method: "post",
      body: JSON.stringify({
        bookType,
        bookName,
        quantity,
        pages,
        auther,
        sem,
        price,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = result.json();
    localStorage.setItem("book", JSON.stringify(result));
    if (result) {
      alert("Book Added Successfully.");
      navigate("/admin");
    }
  };
  return (
    <>
      <div className="containerer d-block p-5">
        <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded fix-width my-5">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              onChange={(e) => setbookType(e.target.value)}
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
            type="text"
            placeholder="Kindly Enter the Exact Book Name"
            className="form-control my-1"
            onChange={(e) => setbookName(e.target.value)}
          />
          <input
            type="number"
            placeholder="How many book you are adding now"
            className="form-control my-1"
            onChange={(e) => setquantity(e.target.value)}
          />
          <h6>Kindly enter more info about this book</h6>
          <input
            type="number"
            placeholder="Total number of pages"
            className="form-control my-1"
            onChange={(e) => setpages(e.target.value)}
          />
          <input
            type="text"
            placeholder="Book author"
            className="form-control my-1"
            onChange={(e) => setauther(e.target.value)}
          />
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            onChange={(e) => setsem(e.target.value)}
          >
            <option value="">This book is for which semester</option>
            <option value="1st Semester">1st Semester</option>
            <option value="2nd Semester">2nd Semester</option>
            <option value="3rd Semester">3rd Semester</option>
            <option value="4th Semester">4th Semester</option>
            <option value="5th Semester">5th Semester</option>
          </select>
          <input
            type="number"
            placeholder="Enter Book Price"
            className="form-control my-1"
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="submit">
            <input
              type="submit"
              className="submit  bg-success p-2  my-3"
              onClick={storeData}
            />
          </div>
        </div>
        <center>
          <button
            type="button"
            className="btn bg-success submit"
            onClick={adminPanel}
          >
            Cancel Book Adding
          </button>
        </center>
      </div>
    </>
  );
}
export default Addbook;
