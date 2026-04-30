import React from "react";
// import 'index.css'

function Searchbook() {
  const [bookType, setName] = React.useState("");
  const [sem, setSem] = React.useState();
  const searchBook = async () => {
    let result = await fetch("http://localhost:8080/find-book", {
      method: "post",
      body: JSON.stringify({ bookType, sem }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("book", JSON.stringify(result));
    if (result) {
      let book = JSON.parse(localStorage.getItem("book"));
      console.warn(book);
      if (book.quantity > 0) {
        let pieces = book.quantity;
        alert("Book is available (" + pieces + ") pieces");
      } else {
        alert("Book is not available");
      }
    }
  };
  return (
    <>
      <div className="containerer ">
      <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded fix-width">
        <div className="form-floating">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            onChange={(e) => setName(e.target.value)}
            value={bookType}
          >
            <option value="">Kindly select the exact book</option>
            <option value="DBMS">Database management System (DBMS)</option>
            <option value="C">C Programming</option>
            <option value="OOPS">OOPS in C++</option>
          </select>
          <label htmlFor="floatingSelect">Find your book</label>
        </div>
        <select
          className="form-select my-3"
          id="floatingSelect"
          aria-label="Floating label select example"
          onChange={(e) => setSem(e.target.value)}
        >
          <option value="">This book is for which semester</option>
          <option value="1st Semester">1st Semester</option>
          <option value="2nd Semester">2nd Semester</option>
          <option value="3rd Semester">3rd Semester</option>
          <option value="4th Semester">4th Semester</option>
          <option value="5th Semester">5th Semester</option>
        </select>
        <div className="submit  p-2">
          <input
            onClick={searchBook}
            className="submit bg-success p-2 my-3"
            type="submit"
          />
        </div>
      </div>
      </div>
    </>
  );
}

export default Searchbook;
