import React from "react";
import Searchbook from "./Searchbook";
import Checkfrndstatus from "./Checkfrndstatus";
import Welcome2 from "./welcome/Welcome";
import Status from "./welcome/Status";
import YourHistory from "./welcome/YourHistory";

function Welcome() {

  return (
    <>
      <div className="containerer">
        <div className="list bg-success bg-opacity-50">
          <ol>
            <li
              className="p-2 bg-secondary"
              onClick={() =>
                window.scroll({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              Welcome{" "}
            </li>
            <li
              className="p-2 bg-secondary"
              onClick={() => window.scrollTo(0, window.innerHeight)}
            >
              Your Status
            </li>
            <li
              className="p-2 bg-secondary"
              onClick={() => window.scrollTo(0, window.innerHeight * 2 - 70)}
            >
              Check for friends
            </li>
            <li
              className="p-2 bg-secondary"
              onClick={() => window.scrollTo(0, window.innerHeight * 3 - 50)}
            >
              Check Book availability
            </li>
            <li
              className="p-2 bg-secondary"
              onClick={() => window.scrollTo(0, window.innerHeight * 4)}
            >
              Print your history
            </li>
          </ol>
        </div>
        <div className="container" id="body">
          <section>
            <Welcome2 />
          </section>
          <section>
            <Status />
          </section>
          <section>
            <Checkfrndstatus />
          </section>
          <section>
            <Searchbook />{" "}
          </section>
          <section>
            <YourHistory />
          </section>
        </div>
      </div>
    </>
  );
}

export default Welcome;
