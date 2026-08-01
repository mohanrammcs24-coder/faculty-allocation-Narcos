import { CalendarClock, Plus, Search } from "lucide-react";
import { useState } from "react";

const timetable = [
  {
    id: 1,
    day: "Monday",
    time: "09:00 - 10:00",
    subject: "Data Structures",
    semester: "III",
    section: "A",
    room: "CSE-201",
  },
  {
    id: 2,
    day: "Monday",
    time: "10:00 - 11:00",
    subject: "DBMS",
    semester: "III",
    section: "B",
    room: "CSE-203",
  },
  {
    id: 3,
    day: "Tuesday",
    time: "11:00 - 12:00",
    subject: "Operating Systems",
    semester: "IV",
    section: "A",
    room: "CSE-301",
  },
  {
    id: 4,
    day: "Wednesday",
    time: "01:00 - 02:00",
    subject: "Computer Networks",
    semester: "IV",
    section: "B",
    room: "CSE-305",
  },
  {
    id: 5,
    day: "Thursday",
    time: "02:00 - 03:00",
    subject: "Machine Learning",
    semester: "V",
    section: "A",
    room: "AI-101",
  },
  {
    id: 6,
    day: "Friday",
    time: "09:00 - 10:00",
    subject: "Software Engineering",
    semester: "VI",
    section: "A",
    room: "CSE-210",
  },
];

export default function FacultyTimetable() {
  const [showGenerateModal, setShowGenerateModal] = useState(false);

  const [generateData, setGenerateData] = useState({
    department: "CSE",
    semester: "III",
    section: "A",
    academicYear: "2026-2027",
    regulation: "R2023",
    periodsPerDay: 6,
    lunchAfter: 4,
    startTime: "09:00",
    endTime: "16:30",
  });
  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Faculty Timetable
          </h1>

          <p className="text-gray-500">Manage weekly faculty schedule</p>
        </div>

        <button
          onClick={() => setShowGenerateModal(true)}
          className="btn btn-primary rounded-xl"
        >
          Generate Timetable
        </button>
      </div>

      {/* Search */}

      <div className="card bg-white shadow border border-gray-200">
        <div className="card-body flex-row gap-4">
          <input
            type="text"
            placeholder="Search Faculty..."
            className="input input-bordered w-full bg-gray-200"
          />

          <select className="select select-bordered bg-gray-100">
            <option>All Days</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      {showGenerateModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 overflow-y-auto pt-5 pb-10">
          <div className="bg-white rounded-2xl w-full max-w-3xl  shadow-2xl p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold">Generate Timetable</h2>

                <p className="text-gray-500">
                  Automatically generate timetable using workload balancing
                </p>
              </div>

              <button
                onClick={() => setShowGenerateModal(false)}
                className="btn btn-sm"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <select className="select select-bordered w-full bg-gray-100">
                <option>Select Department</option>
                <option>CSE</option>
                <option>IT</option>
                <option>ECE</option>
                <option>EEE</option>
                <option>MECH</option>
              </select>

              <select className="select select-bordered w-full bg-gray-100">
                <option>Select Semester</option>
                <option>I</option>
                <option>II</option>
                <option>III</option>
                <option>IV</option>
                <option>V</option>
                <option>VI</option>
                <option>VII</option>
                <option>VIII</option>
              </select>

              <select className="select select-bordered w-full bg-gray-100">
                <option>Select Section</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>

              <input
                type="text"
                className="input input-bordered w-full bg-gray-100"
                placeholder="Academic Year (Eg: 2026-2027)"
              />

              <input
                type="text"
                className="input input-bordered w-full bg-gray-100"
                placeholder="Regulation (Eg: R2023)"
              />
              <input
                type="time"
                className="input input-bordered w-full bg-gray-100"
                placeholder="College Start Time"
              />

              <input
                type="time"
                className="input input-bordered w-full bg-gray-100"
                placeholder="College End Time"
              />

              <input
                type="number"
                className="input input-bordered w-full bg-gray-100"
                placeholder="Periods Per Day"
              />

              <input
                type="number"
                className="input input-bordered w-full bg-gray-100"
                placeholder="Period Duration (Minutes)"
              />

              <select className="select select-bordered w-full bg-gray-100">
                <option>Select Lunch Break</option>
                <option>After 3rd Period</option>
                <option>After 4th Period</option>
                <option>After 5th Period</option>
              </select>
              <select className="select select-bordered w-full bg-gray-100">
                <option>Select Allocation Mode</option>
                <option>Automatic Allocation</option>
                <option>Manual Allocation</option>
              </select>

              <select className="select select-bordered w-full bg-gray-100">
                <option>Select Faculty</option>
              </select>

              <select className="select select-bordered w-full bg-gray-100">
                <option>Select Classroom</option>
              </select>
              <select className="select select-bordered w-full bg-gray-100">
                <option>Select Subject</option>
              </select>

              <select className="select select-bordered w-full bg-gray-100">
                <option>Select Subject Type</option>
                <option>Theory</option>
                <option>Laboratory</option>
              </select>

              <input
                type="number"
                className="input input-bordered w-full bg-gray-100"
                placeholder="Weekly Hours"
              />

              <div className="divider">Working Days</div>

              <div className="flex gap-3 flex-wrap">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <label key={day} className="label cursor-pointer gap-2">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-sm checkbox-success"
                    />

                    <span>{day}</span>
                  </label>
                ))}
              </div>
              <button className="btn">Cancel</button>

              <button className="btn btn-primary">Generate Timetable</button>

              <button className="btn btn-success">Publish Timetable</button>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {timetable.map((item) => (
          <div
            key={item.id}
            className="card  shadow  hover:shadow-lg transition bg-gray-100"
          >
            <div className="card-body">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="card-title">{item.subject}</h2>

                  <p className="text-sm text-gray-500">{item.day}</p>
                </div>

                <div className="bg-primary/10 p-3 rounded-xl">
                  <CalendarClock className="text-primary" />
                </div>
              </div>

              <div className="divider my-2"></div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Time</span>
                  <span className="font-medium">{item.time}</span>
                </div>

                <div className="flex justify-between">
                  <span>Semester</span>

                  <span className="badge badge-primary">{item.semester}</span>
                </div>

                <div className="flex justify-between">
                  <span>Section</span>

                  <span>{item.section}</span>
                </div>

                <div className="flex justify-between">
                  <span>Room</span>

                  <span>{item.room}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
