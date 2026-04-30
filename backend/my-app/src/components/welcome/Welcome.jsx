import React from 'react'
import Img from "../img/library.jpg";

const Welcome = () => {
  return (
    <>
      <div className="containerer">
      <div className=" container library-image my-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded text-center fix-width">
            <h1 className="center text-success my-2 my-2">Welcome Back Guys</h1>
            <img src={Img} alt="Library " className="img my-2" />
            <h3 className="my-2">
              Apna Library{" "}
              <i className="fa-sharp fa-solid fa-book fa-beat text-warning"></i>
            </h3>
          </div>
      </div>
    </>
  )
}

export default Welcome
