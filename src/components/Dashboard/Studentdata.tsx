import React, {useState} from "react";

type Topic = {
  id: number;
  title: string;
};

type Row = {
  id: number;
  name: string;
  score: string;
  status: "Completed" | "In Progress";
  date: string;
};

const Studentdata: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Topics (3)");

  const topics: Topic[] = [
    {id: 1, title: "Introduction to React"},
    {id: 2, title: "Components & Props"},
    {id: 3, title: "State & Lifecycle"},
  ];

  const tableData: Row[] = [
    {
      id: 1,
      name: "Alice",
      score: "95",
      status: "Completed",
      date: "2025-09-01",
    },
    {id: 2, name: "Bob", score: "82", status: "Completed", date: "2025-09-02"},
    {
      id: 3,
      name: "Charlie",
      score: "78",
      status: "In Progress",
      date: "2025-09-03",
    },
  ];

  return (
    <div>
      <div className="mb-6"></div>

      {activeTab === "Topics (3)" && (
        <div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {/* Topic Rows */}
            {topics.map((topic, index) => (
              <div
                key={topic.id}
                className="flex justify-between p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-8">
                  <div className="text-sm text-gray-900">{index + 1}</div>
                  <div className="text-sm text-gray-900">{topic.title}</div>
                </div>
                <div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Assessments (1)" && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Assessments
          </h2>

          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="text-center py-8">
                <div className="text-gray-400 mb-2">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  React Fundamentals Quiz
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete the assessment to test your React knowledge
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Start Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Leaderboard" && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Leaderboard
          </h2>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((row, index) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center">
                        {index === 0 && (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full mr-2">
                            🏆
                          </span>
                        )}
                        {index + 1}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span
                        className={`font-medium ${
                          parseInt(row.score) >= 90
                            ? "text-green-600"
                            : parseInt(row.score) >= 80
                            ? "text-blue-600"
                            : "text-orange-600"
                        }`}
                      >
                        {row.score}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          row.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Studentdata;
