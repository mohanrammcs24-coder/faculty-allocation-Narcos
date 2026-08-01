
import {
  Users,
  Building2,
  TrendingUp,
  AlertTriangle,
  Activity,
  Download,
  BookOpen,
} from "lucide-react";

const analytics = [
  {
    title: "Total Faculty",
    value: "156",
    subtitle: "+12 this month",
    icon: Users,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Departments",
    value: "12",
    subtitle: "All Active",
    icon: Building2,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Subjects",
    value: "248",
    subtitle: "Current Semester",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Faculty Utilization",
    value: "91%",
    subtitle: "Excellent",
    icon: TrendingUp,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Pending Allocation",
    value: "18",
    subtitle: "Need Attention",
    icon: AlertTriangle,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Workload Hours",
    value: "2480",
    subtitle: "Weekly",
    icon: Activity,
    color: "bg-purple-100 text-purple-600",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Analytics Dashboard
          </h1>

          <p className="text-gray-500 text-sm">
            Faculty workload insights and statistics
          </p>
        </div>

        <button className="btn btn-primary rounded-xl">
          <Download size={14} />
          Export Report
        </button>
      </div>

      {/* KPI Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {analytics.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="card  shadow border border-gray-100 hover:shadow-lg transition"
            >
              <div className="card-body">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-500">{item.title}</p>

                    <h2 className="text-3xl font-bold mt-2">{item.value}</h2>

                    <p className="text-green-500 text-sm mt-2">
                      {item.subtitle}
                    </p>
                  </div>

                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.color}`}
                  >
                    <Icon size={28} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Top Faculty */}

      <div className="card  shadow border border-gray-100">
        <div className="card-body">
          <h2 className="font-semibold mb-4">Top Faculty Workload</h2>

          <div className="overflow-x-auto">
            <table className="table text-black">
              <thead className="text-black">
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Hours</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Dr. Rajesh Kumar</td>
                  <td>CSE</td>
                  <td>18 / 18</td>
                  <td>
                    <span className="badge badge-error">Full</span>
                  </td>
                </tr>

                <tr>
                  <td>Dr. Priya Sharma</td>
                  <td>CSE</td>
                  <td>17 / 18</td>
                  <td>
                    <span className="badge badge-warning">High</span>
                  </td>
                </tr>

                <tr>
                  <td>Rahul Verma</td>
                  <td>IT</td>
                  <td>15 / 18</td>
                  <td>
                    <span className="badge badge-success">Normal</span>
                  </td>
                </tr>

                <tr>
                  <td>Kavitha Rao</td>
                  <td>ECE</td>
                  <td>14 / 18</td>
                  <td>
                    <span className="badge badge-success">Normal</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
