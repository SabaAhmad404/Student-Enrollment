import React, { useState } from "react";
import rashidali from "./imgs/rashidali.png";
import johndoe from "./imgs/johndoe.png";
import salman from "./imgs/salman.png";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import "./schedule.css";

const instructors = [
  {
    id: 1,
    name: "Ali Abadal",
    freeHours: 10,
    type: "In-Vehicle",
    color: "green",
    image: johndoe,
  },
  {
    id: 2,
    name: "Rashid Ali",
    freeHours: 8,
    type: "Other",
    color: "gray",
    image: rashidali,
  },
  {
    id: 3,
    name: "Salman Khan",
    freeHours: 7,
    type: "Online",
    color: "red",
    image: salman,
  },
];

const suggestedSchedule = [
  { day: "Monday", slots: ["09:00 AM - 10:00 AM"] },
  { day: "Tuesday", slots: ["11:00 AM - 12:00 PM", "01:30 PM - 02:00 PM"] },
  { day: "Wednesday", slots: ["03:00 PM - 04:00 PM", "05:00 PM - 06:00 PM"] },
  { day: "Thursday", slots: ["03:00 PM - 04:00 PM"] },
];

export default function Schedule() {
  const [currentInstructorIdx, setCurrentInstructorIdx] = useState(0);
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [fromTime, setFromTime] = useState("07:00 AM");
  const [toTime, setToTime] = useState("08:00 AM");

  const currentInstructor = instructors[currentInstructorIdx];

  const nextInstructor = () => {
    setCurrentInstructorIdx((prev) => (prev + 1) % instructors.length);
  };

  const prevInstructor = () => {
    setCurrentInstructorIdx((prev) =>
      prev === 0 ? instructors.length - 1 : prev - 1
    );
  };

  const addClass = () => {
    setShowModal(true);
  };

  const updateSchedule = () => {
    const newClass = {
      instructor: currentInstructor.name,
      schedule: [
        {
          day: selectedDay,
          slots: [`${fromTime} - ${toTime}`],
        },
      ],
    };
    setClasses([...classes, newClass]);
    setShowModal(false);
  };
  const handleCreateSchedule = () => {
    if (classes.length === 0) {
      alert("Please add at least one class before creating the schedule.");
      return;
    }

    console.log("Schedule Created:", classes);
    alert("Schedule has been created successfully!");
  };

  const renderScheduleForDay = (schedule, day) => {
    const daySchedule = schedule.find((s) => s.day === day);
    if (daySchedule) {
      return daySchedule.slots.join(", ");
    }
    return "No Classes";
  };

  return (
    <div className="schedule-container">
      <div className="create-schedule-wrapper">
        <div className="profile">
          <img src={johndoe} alt="profile" className="profile-img" />
          <div>
            <h2 className="profile-name">John Doe</h2>
          </div>
        </div>
        <button
          className="create-schedule-btn"
          onClick={() => handleCreateSchedule()}
        >
          Create Schedule
        </button>
      </div>

      <div className="instructors-row">
        {instructors.map((instructor, idx) => (
          <div
            key={instructor.id}
            className={`instructor-card-wrapper ${
              idx === currentInstructorIdx ? "selected" : ""
            }`}
          >
            <div className="card-wrapper">
              <div className="instructor-info">
                <img
                  className="instructor-image"
                  src={instructor.image}
                  alt={instructor.name}
                />
                <h3 className="instru-name">{instructor.name}</h3>
                {idx === currentInstructorIdx && (
                  <>
                    <div className="instructor-controls">
                      <ArrowLeft
                        className=" button-icon"
                        onClick={prevInstructor}
                      />
                      <ArrowRight
                        className=" button-icon"
                        onClick={nextInstructor}
                      />
                    </div>
                    {/* <button className="add-class" onClick={addClass}>Add Class</button> */}
                  </>
                )}
              </div>
              <div className="instructor-hours-box">
                <p>{instructor.type} Classes</p>
                <p>{instructor.freeHours} Hrs</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="add-class-wrapper">
        <button className="add-class" onClick={addClass}>
          Add Class
        </button>
      </div>

      {/* <div className="schedule-list">
        <h4>Student Suggested Schedule</h4>
        <ul>
          {suggestedSchedule.map((s, idx) => (
            <li key={idx}>
              <strong>{s.day}:</strong> {s.slots.join(", ")}
            </li>
          ))}
        </ul>
      </div> */}
      <div className="schedule-list">
        <h4>Student Suggested Schedule</h4>
        <ul>
          {suggestedSchedule.map((s, idx) => (
            <li className="days-list" key={idx}>
              <strong>{s.day}</strong>
              {s.slots.map((slot, slotIdx) => (
                <label key={slotIdx} className="slot-radio">
                  <input type="radio" name={`schedule-${idx}`} value={slot} />
                  {slot}
                </label>
              ))}
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="created-classes">
        <h4>Created Classes:</h4>
        {classes.map((cls, idx) => (
          <div key={idx} className="class-card">
            <p>Instructor: {cls.instructor}</p>
            {cls.schedule.map((s, i) => (
              <p key={i}>
                {s.day}: {s.slots.join(", ")}
              </p>
            ))}
          </div>
        ))}
      </div> */}
      <div className="created-classes">
        <h4>Created Classes:</h4>
        <table className="classes-table">
          <thead>
            <tr>
              <th>Instructor</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, idx) => (
              <tr key={idx}>
                <td>{cls.instructor}</td>
                <td>{renderScheduleForDay(cls.schedule, "Monday")}</td>
                <td>{renderScheduleForDay(cls.schedule, "Tuesday")}</td>
                <td>{renderScheduleForDay(cls.schedule, "Wednesday")}</td>
                <td>{renderScheduleForDay(cls.schedule, "Thursday")}</td>
                <td>{renderScheduleForDay(cls.schedule, "Friday")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Custom Time Schedule ({currentInstructor.type})</h3>
            <div className="instructor-select">
              <img
                src={currentInstructor.image || johndoe || salman || rashidali}
                alt={currentInstructor.name}
                className="profile-img"
              />
              <span>
                {currentInstructor.name} ({currentInstructor.type} Hours)
              </span>
            </div>
            <div className="day-time">
              <label>On</label>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              >
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                  (day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  )
                )}
              </select>
              <label>From</label>
              <input
                type="text"
                value={fromTime}
                onChange={(e) => setFromTime(e.target.value)}
              />
              <label>To</label>
              <input
                type="text"
                value={toTime}
                onChange={(e) => setToTime(e.target.value)}
              />
            </div>
            <div className="modal-buttons">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button onClick={updateSchedule}>Update Schedule</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
