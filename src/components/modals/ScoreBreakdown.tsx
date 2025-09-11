import React from "react";

type ClassTopic = {
  id: number;
  topic: string;
};

const ClassBreakdown: React.FC = () => {
    const topics: ClassTopic[] = [
    { id: 1, topic: "Introduction To React" },
    { id: 2, topic: "State And Events" },
    { id: 3, topic: "Side Effects And Data" },
    { id: 4, topic: "Final Project And Wrap-Up" },
    { id: 5, topic: "Introduction To React" },
    { id: 6, topic: "Introduction To React" },
    { id: 7, topic: "Introduction To React" },
    { id: 8, topic: "Introduction To React" },
    { id: 9, topic: "Introduction To React" },
    { id: 10, topic: "Introduction To React" },
  ];

  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <h2 className="text-xl font-light text-gray-500 mb-4">
        Class Breakdown
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 bg-gray-100 text-base border-b border-gray-200">
              <th className="py-3 px-4 font-light w-[10%]">S/N</th>
              <th className="py-3 px-4 font-light w-[70%]">Topic</th>
              <th className="py-3 px-4 font-light w-[20%]">Action</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((item, index) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 last:border-none hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 text-gray-400 text-sm">{index + 1}</td>
                <td className="py-3 px-4 text-gray-500 text-sm">{item.topic}</td>
                <td className="py-3 px-4">
                  <button className="text-gray-500 hover:text-gray-700">
                    ⋮
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassBreakdown;
