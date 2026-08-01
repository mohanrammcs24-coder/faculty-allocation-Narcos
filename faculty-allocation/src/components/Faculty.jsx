import { Search, Plus } from "lucide-react";
import { useState } from "react";

const faculty = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    department: "CSE",
    designation: "Professor",
    workload: "16 / 18",
    status: "Available",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    department: "CSE",
    designation: "HOD",
    workload: "18 / 18",
    status: "Full",
  },
  {
    id: 3,
    name: "Rahul Verma",
    department: "IT",
    designation: "Assistant Professor",
    workload: "12 / 18",
    status: "Available",
  },
  {
    id: 4,
    name: "Kavitha Rao",
    department: "ECE",
    designation: "Associate Professor",
    workload: "14 / 18",
    status: "Available",
  },
];

const Faculty = () => {
  const [showModal, setShowModal] = useState(false);

  const [facultyList, setFacultyList] = useState(faculty);

  const [newFaculty, setNewFaculty] = useState({
    name: "",
    department: "CSE",
    designation: "Assistant Professor",
    workload: "0 / 18",
    status: "Available",
  });

  const handleAddFaculty = () => {
    if (!newFaculty.name || !newFaculty.department || !newFaculty.designation) {
      alert("Please fill all required fields");
      return;
    }

    setFacultyList([
      ...facultyList,
      {
        id: Date.now(),
        ...newFaculty,
      },
    ]);

    setNewFaculty({
      name: "",
      department: "CSE",
      designation: "Assistant Professor",
      workload: "0 / 18",
      status: "Available",
    });

    setShowModal(false);
  };
  return (
    <div className="space-y-6 text-md">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Faculty</h1>

          <p className="text-gray-500 text-sm">
            Manage faculty members and workloads
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="btn-primary-solid px-4 py-2.5 text-sm font-medium flex items-center gap-2"
        >
          <Plus size={16} />
          Add Faculty
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-6">Add Faculty</h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                className="input input-bordered col-span-2 bg-gray-50"
                placeholder="Faculty Name"
                value={newFaculty.name}
                onChange={(e) =>
                  setNewFaculty({
                    ...newFaculty,
                    name: e.target.value,
                  })
                }
              />

              <select
                className="select select-bordered bg-gray-50"
                value={newFaculty.department}
                onChange={(e) =>
                  setNewFaculty({
                    ...newFaculty,
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
                className="select select-bordered bg-gray-50"
                value={newFaculty.designation}
                onChange={(e) =>
                  setNewFaculty({
                    ...newFaculty,
                    designation: e.target.value,
                  })
                }
              >
                <option>Professor</option>
                <option>Associate Professor</option>
                <option>Assistant Professor</option>
                <option>HOD</option>
              </select>

              <input
                className="input input-bordered bg-gray-50"
                placeholder="Current Workload"
                value={newFaculty.workload}
                onChange={(e) =>
                  setNewFaculty({
                    ...newFaculty,
                    workload: e.target.value,
                  })
                }
              />

              <select
                className="select select-bordered bg-gray-50"
                value={newFaculty.status}
                onChange={(e) =>
                  setNewFaculty({
                    ...newFaculty,
                    status: e.target.value,
                  })
                }
              >
                <option>Available</option>
                <option>Full</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button className="btn" onClick={() => setShowModal(false)}>
                Cancel
              </button>

              <button className="btn btn-primary" onClick={handleAddFaculty}>
                Save Faculty
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="card  shadow  ">
        <div className="card-body flex-row gap-4">
          <input
            type="text"
            placeholder="Search Subject..."
            className="input input-bordered w-full bg-gray-200"
          />

          <select className="border border-gray-300 rounded-xl px-2 py-2">
            <option>All Departments</option>
            <option>CSE</option>
            <option>IT</option>
            <option>ECE</option>
          </select>

          <select className="border border-gray-300 rounded-xl px-2 py-2">
            <option>Designation</option>
            <option>Professor</option>
            <option>Associate Professor</option>
            <option>Assistant Professor</option>
          </select>
        </div>
      </div>

      <div className="card-surface overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left">Faculty</th>
              <th className="text-left">Department</th>
              <th className="text-left">Designation</th>
              <th className="text-left">Workload</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {faculty.map((item) => (
              <tr
                key={item.id}
                className="h-6 w-6 p-4 border-t border-gray-100"
              >
                <td className=" flex items-center gap-3 px-4">
                  <div className="h-5 w-5 p-3 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-semibold">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-medium px-5 py-3">{item.name}</p>
                  </div>
                </td>

                <td className="px-5 py-3">{item.department}</td>

                <td className="px-5 py-3">{item.designation}</td>

                <td className="px-5 py-3">{item.workload}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      item.status === "Available"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Faculty;
