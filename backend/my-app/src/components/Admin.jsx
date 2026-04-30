import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <div className="containerer">
        <div className="list bg-success bg-opacity-50">
          <div className="container d-block justify-content-around">
            <div className="buttons">
              <Link className="nav-link" to="/addbooks">
                Add Books
              </Link>
            </div>
            <div className="buttons">
              <Link className="nav-link" to="/give">
                Give
              </Link>
            </div>
            <div className="buttons">
              <Link className="nav-link" to="/collect">
                Collect
              </Link>
            </div>
            <div className="buttons">
              <Link className="nav-link" to="/history">
                Total History
              </Link>
            </div>
            <div className="buttons">
              <Link className="nav-link" to="/totalhistory">
                Current Status
              </Link>
            </div>
            <div className="buttons">
              <Link className="nav-link" to="/users">
                All Users
              </Link>
            </div>
          </div>
        </div>
        <div className="container d-block">
          <div className="containerer3">
            <div className="space"></div>
            <div className="container justify-content-center shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <h1>Welcome back dear admin</h1>
              <h5>Information and Notes for admin : - </h5>
              <ul>
                <li>This is a full stack Single Page Application.</li>
              </ul>

              <h4> How to add the books : - </h4>
              <p>
                <b>Here are some steps for adding the books : -</b>
              </p>
              <ul>
                <li>
                  Go to <b>Add Books </b> Tab.
                </li>
                <li>
                  Enter all information about that books which you are adding
                  now.
                </li>
                <li>Submit the form.</li>
              </ul>

              <h4>How to give a book to the student : - </h4>
              <p>
                <b>Here are some steps for giving a book : -</b>
              </p>
              <ul>
                <li>
                  Go to <b>Give </b> Tab.
                </li>
                <li>
                  Enter all information about that student which you are giving
                  the book.
                </li>
                <li>Submit the form.</li>
              </ul>

              <h4>How to collect a book from the student : - </h4>
              <p>
                <b>Here are some steps for collecting a book : -</b>
              </p>
              <ul>
                <li>
                  Go to <b>Collect </b> Tab.
                </li>
                <li>
                  Enter all information about that student which you are giving
                  the book.
                </li>
                <li>Submit the form.</li>
              </ul>

              <h4>How to check the history : - </h4>
              <p>
                <b>Here are some steps for checking the history : -</b>
              </p>
              <ul>
                <li>
                  Go to <b>History </b> Tab.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
