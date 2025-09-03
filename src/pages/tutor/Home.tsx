
import { Plus, SlidersHorizontal } from "lucide-react";
import Classes from "../../components/tutor/Classes";
import Activites from "../../components/tutor/Activites";

const data = [
  {
    title: "React Fundametals",
    submission: 3,
    studentCount: 15,
    assessmentCount: 3,
  },
  {
    title: "Advanced Javascript",
    submission: 2,
    studentCount: 22,
    assessmentCount: 5,
  },
  {
    title: "Node.JS Backend",
    submission: 1,
    studentCount: 10,
    assessmentCount: 4,
  },
];

const data2 = [
  {
    title: "React Fundametals",
    description: "React Fundametals from React Project",
    time: "10",
  },
  {
    title: "Advanced Javascript",
    description: "Advanced Javascript from React Project",
    time: "10",
  },
  {
    title: "Node.JS Backend",
    description: "Node.JS Backend from node Project",
    time: "10",
  },
  {
    title: "Node.JS Backend",
    description: "Node.JS Backend from node Project",
    time: "10",
  },
];
const TutorHome: React.FC = () => {
  return (
    <main>
      <div>
        <p className="text-xl fornt-semibold">Welcome, John Doe</p>
        <p className="text-sm text-gray-400">
          Manage your student assesment and activities smoothly
        </p>
      </div>
      <div className="grid grid-cols-4 mx-10 pt-12">
        <div className="bg-gray-100 p-4 rounded-2xl w-55 text-center">
          <p className="text-3xl font-bold">3</p>
          <p className="text-sm text-gray-600">Active classes</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-2xl w-55 text-center">
          <p className="text-3xl font-bold">47</p>
          <p className="text-sm text-gray-600">Total Students</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-2xl w-55 text-center">
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-gray-600">Active assesments</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-2xl w-55 text-center">
          <p className="text-3xl font-bold">89</p>
          <p className="text-sm text-gray-600">Pending grades</p>
        </div>
      </div>
      <div className="flex items-center gap-2 ml-10 pt-10">
        <p className="text-gray-500">Quick Actions :</p>
        <div className="grid grid-cols-3 ml-5 space-x-10">
          <button className="flex items-center gap-2 text-sm  text-center bg-blue-700 hover:bg-blue-500 text-white px-15 py-3 rounded-4xl">
            <Plus className="border rounded-full w-4 h-4" /> Create Assesment
          </button>
          <button className="flex items-center gap-2 text-sm  text-center bg-blue-700 hover:bg-blue-500 text-white px-15 py-3 rounded-4xl">
            <Plus className="border rounded-full w-4 h-4" /> Create Class
          </button>
          <button className="flex items-center gap-2 text-sm text-center  bg-blue-700 hover:bg-blue-500 text-white px-15 py-3 rounded-4xl">
            <Plus className="border rounded-full w-4 h-4" /> Create Class
          </button>
        </div>
      </div>
      <div className="pt-7 flex justify-between">
        <div>
          <p className="border-b border-gray-200 pb-3 w-130">My Classes</p>
          <div className="space-y-3 pt-5">
            {data.map((item) => (
              <Classes
                title={item.title}
                submission={item.submission}
                studentCount={item.studentCount}
                assessmentCount={item.assessmentCount}
              />
            ))}
          </div>
        </div>
        <div className="pt-11 mr-7">
          <div className="flex justify-between items-center w-100 bg-gray-300 p-3 rounded-tl-2xl rounded-tr-2xl">
            <p className="font-semibold">Recent Activites</p>
            <SlidersHorizontal className="w-4 h-4" />
          </div>
          <div className="border border-gray-200 p-3 space-y-6 rounded-br-2xl rounded-bl-2xl ">
            {data2.map((item) => (
              <Activites
                title={item.title}
                description={item.description}
                time={item.time}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TutorHome;
