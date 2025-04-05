import React, { useState } from "react";
import student from "../imgs/student.png";
import Schedule from "./schedule/Schedule";

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState("client");
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    gender: "",
    age: "",
  });

  const handleClientInfoChange = (e) => {
    const { name, value } = e.target;
    setClientInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextClick = () => {
    const isFormComplete = Object.values(clientInfo).every(
      (val) => val.trim() !== ""
    );

    if (isFormComplete) {
      setCurrentPage("schedule"); 
    } else {
      alert("Please fill out all the client information!");
    }
  };

  return (
    <>
      <nav className="Nav-bar-container">
        <div className="nav-bar-headings">
          <h2>Vehicle Mechanics</h2>
          <span className="line">|</span>
          <h2>Diamond</h2>
        </div>

        <div className="buttons-container">
          <div className="button-wrapper">
            <button
              className={`header-btn ${
                currentPage === "client" ? "active" : ""
              }`}
              onClick={() => setCurrentPage("client")}
            >
              About Client
            </button>
            {currentPage === "client" && <hr className="active-line" />}
          </div>

          <div className="button-wrapper">
            <button
              className={`header-btn ${
                currentPage === "schedule" ? "active" : ""
              }`}
              onClick={handleNextClick}
            >
              Schedule Instructor
            </button>
            {currentPage === "schedule" && <hr className="active-line" />}
          </div>
        </div>
      </nav>

      {currentPage === "client" && (
        <div className="client-info">
          <form className="form-data">
            <div className="sec-1">
              <img src={student} alt="Profile" className="profile-pic" />

              <div className="labels">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={clientInfo.email}
                  onChange={handleClientInfoChange}
                  placeholder="Email"
                />
              </div>

              <div className="labels">
                <label>Age</label>
                <input
                  type="text"
                  name="age"
                  value={clientInfo.age}
                  onChange={handleClientInfoChange}
                  placeholder="Age"
                />
              </div>
            </div>

            <div className="sec-2">
              <div className="labels">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={clientInfo.name}
                  onChange={handleClientInfoChange}
                  placeholder="Name"
                />
              </div>
              <div className="labels">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={clientInfo.address}
                  onChange={handleClientInfoChange}
                  placeholder="Address"
                />
              </div>
              <div className="labels">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={clientInfo.phone}
                  onChange={handleClientInfoChange}
                  placeholder="Phone Number"
                />
              </div>
              <div className="labels">
                <label>Gender</label>
                <input
                  type="text"
                  name="gender"
                  value={clientInfo.gender}
                  onChange={handleClientInfoChange}
                  placeholder="Gender"
                />
              </div>
            </div>
          </form>
        </div>
      )}

      {currentPage !== "schedule" && (
        <div className="next">
          <button className="next-btn" onClick={handleNextClick}>
            Next
          </button>
        </div>
      )}

      {currentPage === "schedule" && (
        <div className="schedule-instructor">
          <Schedule />
        </div>
      )}
    </>
  );
}
