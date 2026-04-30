import React from "react";

function Profile() {
  let profile = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="containerer">
        <div className="container fix-width">
          <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <h1 className="text-success">Your Profile</h1>
          </div>
          <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <div className="container d-flex justify-content-space-between column-gap-3">
              <p>Name : - </p>
              {profile.name}
            </div>
            <div className="container d-flex justify-content-space-between column-gap-3">
              <p>Email : - </p>
              {profile.email}
            </div>
            <div className="container d-flex justify-content-space-between column-gap-3">
              <p>D.O.B : - </p>
              {profile.dob}
            </div>
            <div className="container d-flex justify-content-space-between column-gap-3">
              <p>Mobile : - </p>
              {profile.mobile}
            </div>
            <div className="container d-flex justify-content-space-between column-gap-3">
              <p>Session : - </p>
              {profile.session}
            </div>
            <div className="container d-flex justify-content-space-between column-gap-3">
              <p>Class Roll Number : - </p>
              {profile.roll}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
