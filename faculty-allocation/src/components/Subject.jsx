import { useState } from "react";
import { BookOpen } from "lucide-react";

export default function Subjects() {
  const [subjects, setSubjects] = useState([
    {
      id: 1,
      code: "CS301",
      name: "Data Structures",
      semester: "III",
      department: "CSE",
      credits: 4,
      faculty: "Dr. Rajesh Kumar",
      status: "Assigned",
    },
    {
      id: 2,
      code: "CS302",
      name: "Database Management System",
      semester: "III",
      department: "CSE",
      credits: 3,
      faculty: "Dr. Priya Sharma",
      status: "Assigned",
    },
    {
      id: 3,
      code: "CS401",
      name: "Operating Systems",
      semester: "IV",
      department: "CSE",
      credits: 4,
      faculty: "Rahul Verma",
      status: "Assigned",
    },
    {
      id: 4,
      code: "CS501",
      name: "Machine Learning",
      semester: "V",
      department: "CSE",
      credits: 4,
      faculty: "-",
      status: "Pending",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const [newSubject, setNewSubject] = useState({
    code: "",
    name: "",
    department: "CSE",
    semester: "I",
    credits: 3,
    faculty: "",
    status: "Pending",
  });

  const handleAddSubject = () => {
    if (!newSubject.code || !newSubject.name || !newSubject.department) {
      alert("Please fill all required fields");
      return;
    }

    setSubjects([
      ...subjects,
      {
        id: Date.now(),
        ...newSubject,
        faculty: newSubject.faculty || "-",
      },
    ]);

    setNewSubject({
      code: "",
      name: "",
      department: "CSE",
      semester: "I",
      credits: 3,
      faculty: "",
      status: "Pending",
    });

    setShowModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Subjects</h1>
          <p className="text-gray-500">Manage semester subjects</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="btn btn-primary rounded-xl"
        >
          + Add Subject
        </button>
      </div>

      {/* Modal */}

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-5">Add Subject</h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                className="input input-bordered w-full bg-gray-100"
                placeholder="Subject Code"
                value={newSubject.code}
                onChange={(e) =>
                  setNewSubject({
                    ...newSubject,
                    code: e.target.value,
                  })
                }
              />

              <input
                className="input input-bordered w-full bg-gray-100"
                placeholder="Credits"
                type="number"
                value={newSubject.credits}
                onChange={(e) =>
                  setNewSubject({
                    ...newSubject,
                    credits: e.target.value,
                  })
                }
              />

              <input
                className="input input-bordered col-span-2 bg-gray-100"
                placeholder="Subject Name"
                value={newSubject.name}
                onChange={(e) =>
                  setNewSubject({
                    ...newSubject,
                    name: e.target.value,
                  })
                }
              />

              <select
                className="select select-bordered bg-gray-100"
                value={newSubject.department}
                onChange={(e) =>
                  setNewSubject({
                    ...newSubject,
                    department: e.target.value,
                  })
                }
              >
                <option>CSE</option>
                <option>IT</option>
                <option>ECE</option>
                <option>EEE</option>
                <option>MECH</option>
              </select>

              <select
                className="select select-bordered bg-gray-100"
                value={newSubject.semester}
                onChange={(e) =>
                  setNewSubject({
                    ...newSubject,
                    semester: e.target.value,
                  })
                }
              >
                <option>I</option>
                <option>II</option>
                <option>III</option>
                <option>IV</option>
                <option>V</option>
                <option>VI</option>
                <option>VII</option>
                <option>VIII</option>
              </select>

              <input
                className="input input-bordered col-span-2 bg-gray-100"
                placeholder="Faculty Name"
                value={newSubject.faculty}
                onChange={(e) =>
                  setNewSubject({
                    ...newSubject,
                    faculty: e.target.value,
                  })
                }
              />

              <select
                className="select select-bordered col-span-2 bg-gray-100"
                value={newSubject.status}
                onChange={(e) =>
                  setNewSubject({
                    ...newSubject,
                    status: e.target.value,
                  })
                }
              >
                <option>Assigned</option>
                <option>Pending</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button className="btn" onClick={() => setShowModal(false)}>
                Cancel
              </button>

              <button className="btn btn-primary" onClick={handleAddSubject}>
                Save Subject
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search */}

      <div className="card shadow">
        <div className="card-body flex-row gap-4">
          <input
            type="text"
            placeholder="Search Subject..."
            className="input input-bordered w-full bg-gray-100"
          />

          <select className="select select-bordered bg-gray-100">
            <option>Department</option>
            <option>CSE</option>
            <option>IT</option>
            <option>ECE</option>
          </select>

          <select className="select select-bordered bg-gray-100">
            <option>Semester</option>
            <option>I</option>
            <option>II</option>
            <option>III</option>
            <option>IV</option>
            <option>V</option>
            <option>VI</option>
            <option>VII</option>
            <option>VIII</option>
          </select>
        </div>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="card bg-gray-100 shadow hover:shadow-xl transition"
          >
            <div className="card-body">
              <div className="flex justify-between">
                <div>
                  <h2 className="card-title">{subject.code}</h2>

                  <p className="text-gray-500">{subject.name}</p>
                </div>

                <div className="bg-primary/10 p-3 rounded-xl">
                  <BookOpen className="text-primary" />
                </div>
              </div>

              <div className="divider"></div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Department</span>
                  <span className="font-semibold">{subject.department}</span>
                </div>

                <div className="flex justify-between">
                  <span>Semester</span>
                  <span className="badge badge-primary">
                    {subject.semester}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Credits</span>
                  <span>{subject.credits}</span>
                </div>

                <div className="flex justify-between">
                  <span>Faculty</span>
                  <span>{subject.faculty}</span>
                </div>

                <div className="flex justify-between">
                  <span>Status</span>

                  <span
                    className={`badge ${
                      subject.status === "Assigned"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {subject.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
