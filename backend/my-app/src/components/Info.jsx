import React from "react";
import img from "./img/library.jpg";
import "./style.css";
import myimage from "./img/myImage.png";
import Image1 from "./img/college1.jpg";
import Image2 from "./img/college2.jpg";
import Image3 from "./img/collegebca.jpg";
import Image4 from "./img/collegeroom7.jpg";

function Info() {
  return (
    <>
      <div className="containerer d-block">
        <div className="space"></div>
        <div className="container p-3 mb-5 shadow-sm bg-body-tertiary rounded">
          <h1 className="text-success">
            Library management web app, Single Page Application (SPA)
          </h1>
          <div className="library-image text-center">
            <img src={img} alt="Library " />
          </div>
        </div>
        <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded">
          <b>NOTE : - </b> This Application is just for storing all of our
          library information. Here you can check information like which book
          you have taken and you can check for your friend also. If you are
          thinking for take a book, then you can check that this book is
          available in our library or not.
        </div>
        <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded">
          <p>
            This project is for managing our college library (Special for BCA
            department).
          </p>
        </div>
        <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded text-center">
          <div className="img-style">
            <img src={Image1} alt="" />
          </div>
          <p>
            The D.K.College was founded on June 26, 1956 by a rich and
            kind-hearted lady named “Dharichhana Kuri” in her own village Dumri,
            10 Km. north of Dumraon railway station. The generous lady donated
            Rs. 2,61,000/- in cash and twenty Bighas of land to give a shape to
            her dream of degree college in a rural and educationally backward
            area to impart education to the students belonging to poor &
            downtrodden families. It was really a revolutionary educational
            explosion at that time. But unfortunately, she left for her heavenly
            abode on December 19, 1956. The College became orphan after her
            death. For survival, the college had to struggle hard and change its
            location from Dumri to Purana Bhojpur and then to Dumraon. The
            struggle continued until shifted to its own campus situated between
            Dumraon Railway Station and Naya Bhojpur Village. It has now the
            glory of being one of the D. K. COLLEGE, DUMRAON (VEER KUNWAR SINGH
            UNIVERSITY, ARA) 2017 SELF STUDY REPORT Page 13 of 215 prestigious
            constituent colleges of Veer Kunwar Singh University, Ara.
          </p>
        </div>
        <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded text-center">
          <div className="img-style">
            <img src={Image2} alt="" />
          </div>
          <p>
            D.K. College, Dumraon (DKC) located at AT./P.O.- Dumraon, Dumraon
            Buxar Bihar is one of the popular colleges in India. The College has
            been rated by 49 people on iCBSE. The College has been recognized by
            University Grants Commission since a long time. The D.K. College,
            Dumraon has been viewed 1524 times by the visitors on iCBSE. This
            College is counted among the top-rated Colleges in Bihar with an
            excellent academic track record. If you're looking for more details
            regarding placements, application forms, examinations schedule,
            courses offered, admission procedure, results and syllabus, kindly
            get in touch with the relevant department of the college.
          </p>
        </div>
        <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded text-center">
          <div className="img-style">
            <img src={Image3} alt="" />
          </div>
          <p>
            A Bachelor of Computer Application degree is the core of Computer
            Science in today's world. BCA is a three-year degree program. This
            degree is for those who want to study computer science, software
            engineering, information technology, information security, and
            networking technology.
          </p>
        </div>
        <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded text-center">
          <div className="img-style">
            <img src={Image4} alt="" />
          </div>
          <p>
            This is the study hall where every 1st semester student of BCA
            department attend their class.
          </p>
        </div>
        <footer>
          <div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded justify-content-center">
            <p className="center">
              <b>Terms</b> &amp; <b>Conditions</b>
            </p>

            <p className="center">
              <b>Copyright </b> by <b>Raj Kumar</b>, &copy; March 2024{" "}
            </p>

            <center><img src={myimage} alt="" className="my-image" /></center>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Info;
