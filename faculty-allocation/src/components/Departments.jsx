import { useState } from "react";
import { Plus } from "lucide-react";

const departments = [
  {
    _id: "1",
    name: "Computer Science and Engineering",
    code: "CSE",
    hod: {
      name: "Dr. Rajesh Kumar",
    },
    isActive: true,
  },
  {
    _id: "2",
    name: "Information Technology",
    code: "IT",
    hod: {
      name: "Dr. Priya Sharma",
    },
    isActive: true,
  },
  {
    _id: "3",
    name: "Electronics and Communication Engineering",
    code: "ECE",
    hod: {
      name: "Dr. Arun Kumar",
    },
    isActive: true,
  },
  {
    _id: "4",
    name: "Electrical and Electronics Engineering",
    code: "EEE",
    hod: {
      name: "Dr. Karthikeyan",
    },
    isActive: false,
  },
  {
    _id: "5",
    name: "Mechanical Engineering",
    code: "MECH",
    hod: {
      name: "Dr. Suresh Babu",
    },
    isActive: true,
  },
];

const Departments = () => {
  const [departmentList, setDepartmentList] = useState(departments);

  const [showModal, setShowModal] = useState(false);

  const [newDepartment, setNewDepartment] = useState({
    name: "",
    code: "",
    hod: "",
    status: "Active",
  });

  const handleAddDepartment = () => {
    if (!newDepartment.name || !newDepartment.code || !newDepartment.hod) {
      alert("Please fill all required fields");
      return;
    }

    setDepartmentList([
      ...departmentList,
      {
        id: Date.now(),
        name: newDepartment.name,
        code: newDepartment.code,
        hod: {
          name: newDepartment.hod,
        },
        isActive: newDepartment.status === "Active",
      },
    ]);

    setNewDepartment({
      name: "",
      code: "",
      hod: "",
      status: "Active",
    });

    setShowModal(false);
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Departments</h1>

          <p className="text-sm text-gray-400">
            Manage academic departments and their HODs
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="btn btn-primary rounded-xl"
        >
          <Plus size={18} />
          Add Department
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-6">Add Department</h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                className="input input-bordered col-span-2 bg-gray-50"
                placeholder="Department Name"
                value={newDepartment.name}
                onChange={(e) =>
                  setNewDepartment({
                    ...newDepartment,
                    name: e.target.value,
                  })
                }
              />

              <input
                className="input input-bordered bg-gray-50"
                placeholder="Department Code"
                value={newDepartment.code}
                onChange={(e) =>
                  setNewDepartment({
                    ...newDepartment,
                    code: e.target.value,
                  })
                }
              />

              <input
                className="input input-bordered bg-gray-50"
                placeholder="HOD Name"
                value={newDepartment.hod}
                onChange={(e) =>
                  setNewDepartment({
                    ...newDepartment,
                    hod: e.target.value,
                  })
                }
              />

              <select
                className="select select-bordered col-span-2 bg-gray-50"
                value={newDepartment.status}
                onChange={(e) =>
                  setNewDepartment({
                    ...newDepartment,
                    status: e.target.value,
                  })
                }
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button className="btn" onClick={() => setShowModal(false)}>
                Cancel
              </button>

              <button className="btn btn-primary" onClick={handleAddDepartment}>
                Save Department
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="card-surface overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 text-left">
            <tr>
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Code</th>
              <th className="px-5 py-3 font-medium">HOD</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {departments.map((dept) => (
              <tr key={dept._id} className="border-t border-gray-100">
                <td className="px-5 py-3">{dept.name}</td>

                <td className="px-5 py-3">{dept.code}</td>

                <td className="px-5 py-3">{dept.hod.name}</td>

                <td className="px-5 py-3">
                  <span
                    className={`px-2 py-1 rounded-lg text-xs ${
                      dept.isActive
                        ? "bg-green-50 text-green-600"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {dept.isActive ? "Active" : "Inactive"}
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

export default Departments;
