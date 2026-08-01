import { useState } from "react";
import {
  Search,
  CheckCircle,
  XCircle,
  Eye,
  Clock,
  Download,
} from "lucide-react";

const initialRequests = [
  {
    id: 1,
    faculty: "Dr. Rajesh Kumar",
    department: "CSE",
    semester: "III",
    section: "A",
    subject: "Data Structures",
    room: "CSE-201",
    day: "Monday",
    time: "09:00 - 10:00",
    generatedBy: "Admin",
    submittedOn: "31 Jul 2026",
    status: "Pending",
  },
  {
    id: 2,
    faculty: "Dr. Priya Sharma",
    department: "CSE",
    semester: "III",
    section: "B",
    subject: "DBMS",
    room: "CSE-203",
    day: "Monday",
    time: "10:00 - 11:00",
    generatedBy: "Admin",
    submittedOn: "31 Jul 2026",
    status: "Approved",
  },
  {
    id: 3,
    faculty: "Rahul Verma",
    department: "IT",
    semester: "IV",
    section: "A",
    subject: "Operating Systems",
    room: "IT-301",
    day: "Tuesday",
    time: "11:00 - 12:00",
    generatedBy: "Admin",
    submittedOn: "30 Jul 2026",
    status: "Rejected",
  },
  {
    id: 4,
    faculty: "Kavitha Rao",
    department: "ECE",
    semester: "V",
    section: "A",
    subject: "DSP",
    room: "ECE-102",
    day: "Wednesday",
    time: "02:00 - 03:00",
    generatedBy: "Admin",
    submittedOn: "30 Jul 2026",
    status: "Pending",
  },
];

export default function TimetableApproval() {
  const [requests, setRequests] = useState(initialRequests);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [selected, setSelected] = useState(null);

  const [showViewModal, setshowViewModal] = useState(false);

  const [showRejectModal, setShowRejectModal] = useState(false);

  const [rejectReason, setRejectReason] = useState("");

  const pending = requests.filter((r) => r.status === "Pending").length;

  const approved = requests.filter((r) => r.status === "Approved").length;

  const rejected = requests.filter((r) => r.status === "Rejected").length;

  const filteredRequests = requests.filter((item) => {
    const matchSearch =
      item.faculty.toLowerCase().includes(search.toLowerCase()) ||
      item.subject.toLowerCase().includes(search.toLowerCase());

    const matchStatus = statusFilter === "All" || item.status === statusFilter;

    return matchSearch && matchStatus;
  });

  const handleApprove = (id) => {
    setRequests(
      requests.map((item) =>
        item.id === id ? { ...item, status: "Approved" } : item,
      ),
    );
  };

  const handleReject = () => {
    setRequests(
      requests.map((item) =>
        item.id === selected.id ? { ...item, status: "Rejected" } : item,
      ),
    );

    setRejectReason("");
    setShowRejectModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Timetable Approval</h1>

          <p className="text-gray-500">
            Review and approve generated timetables
          </p>
        </div>

        <button className="btn btn-primary rounded-xl">
          <Download size={18} />
          Export
        </button>
      </div>

      {/* Statistics */}

      <div className="grid grid-cols-3 gap-5">
        <div className="card bg-yellow-50 shadow">
          <div className="card-body">
            <Clock className="text-yellow-500" />

            <h2 className="text-3xl font-bold">{pending}</h2>

            <p>Pending</p>
          </div>
        </div>

        <div className="card bg-green-50 shadow">
          <div className="card-body">
            <CheckCircle className="text-green-600" />

            <h2 className="text-3xl font-bold">{approved}</h2>

            <p>Approved</p>
          </div>
        </div>

        <div className="card bg-red-50 shadow">
          <div className="card-body">
            <XCircle className="text-red-600" />

            <h2 className="text-3xl font-bold">{rejected}</h2>

            <p>Rejected</p>
          </div>
        </div>
      </div>

      {/* Search */}

      <div className="card shadow">
        <div className="card-body flex-row gap-4">
          <div className="relative w-full">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />

            <input
              type="text"
              placeholder="Search Faculty / Subject..."
              className="input input-bordered pl-10 w-full bg-gray-100"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="select select-bordered bg-gray-100"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>
      {/* ===================== TIMETABLE TABLE ===================== */}

      <div className="card bg-white shadow border border-gray-200">
        <div className="card-body p-0 overflow-x-auto">
          <table className="table">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th>Faculty</th>
                <th>Department</th>
                <th>Semester</th>
                <th>Section</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="font-semibold">{item.faculty}</div>
                  </td>

                  <td>{item.department}</td>

                  <td>{item.semester}</td>

                  <td>{item.section}</td>

                  <td>
                    <span
                      className={`badge ${
                        item.status === "Pending"
                          ? "badge-warning"
                          : item.status === "Approved"
                            ? "badge-success"
                            : "badge-error"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <div className="flex gap-2 justify-center">
                      <button
                        className="btn btn-sm btn-outline"
                        onClick={() => {
                          setSelected(item);
                          setshowViewModal(true);
                        }}
                      >
                        <Eye size={15} />
                        View
                      </button>

                      <button className="btn btn-sm btn-success">
                        <CheckCircle size={15} />
                        Approve
                      </button>

                      <button className="btn btn-sm btn-error">
                        <XCircle size={15} />
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===================== APPROVAL MODAL ===================== */}

      {showViewModal && selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">Faculty Timetable</h2>

                <p className="text-gray-500">
                  Review timetable before approval
                </p>
              </div>

              <button
                className="btn btn-sm"
                onClick={() => setshowViewModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-6">
              <div>
                <p className="text-gray-500 text-sm">Faculty</p>
                <h3 className="font-semibold">{selected.faculty}</h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Department</p>
                <h3 className="font-semibold">{selected.department}</h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Semester</p>
                <h3 className="font-semibold">{selected.semester}</h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Section</p>
                <h3 className="font-semibold">{selected.section}</h3>
              </div>
            </div>

            <div className="overflow-x-auto border rounded-xl">
              <table className="table">
                <thead className="bg-gray-100">
                  <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Subject</th>
                    <th>Room</th>
                  </tr>
                </thead>

                <tbody>
                  {selected.schedule.map((cls, index) => (
                    <tr key={index}>
                      <td>{cls.day}</td>
                      <td>{cls.time}</td>
                      <td>{cls.subject}</td>
                      <td>{cls.room}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Submitted Timetables */}
            <div className="card bg-white shadow-md border border-gray-200">
              <div className="card-body">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-lg font-semibold">
                    Submitted Timetable Requests
                  </h2>

                  <button className="btn btn-outline btn-primary btn-sm">
                    Export
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Faculty</th>
                        <th>Department</th>
                        <th>Semester</th>
                        <th>Section</th>
                        <th>Status</th>
                        <th>Submitted On</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {requests.map((item) => (
                        <tr key={item.id}>
                          <td>{item.faculty}</td>

                          <td>{item.department}</td>

                          <td>{item.semester}</td>

                          <td>{item.section}</td>

                          <td>
                            <span
                              className={`badge ${
                                item.status === "Pending"
                                  ? "badge-warning"
                                  : item.status === "Approved"
                                    ? "badge-success"
                                    : "badge-error"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>

                          <td>{item.date}</td>

                          <td>
                            <div className="flex gap-2">
                              <button className="btn btn-success btn-xs">
                                Approve
                              </button>

                              <button className="btn btn-error btn-xs">
                                Reject
                              </button>

                              <button className="btn btn-outline btn-xs">
                                View
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
