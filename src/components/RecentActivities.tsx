import RecentItem from "./RecentItems";
import Button from "./ui/Button";
const RecentData = [
  {
    title: "New Submission",
    description: `from REACT-001 in ${`"React Project"`}`,
    time: "2 minutes ago",
  },
  {
    title: "Assessment Created",
    description: "Javascript Quiz",
    time: "1 hour ago",
  },
  {
    title: "Student Registered",
    description: "Jane Smith (NODE-011)",
    time: "3 hours ago",
  },
];

const RecentActivities = () => {
  return (
    <div className="w-full border mt-5 border-gray-500 bg-gray-100 rounded-xl p-2">
      <h2 className="font-bold">Recent Activities</h2>
      <div className="flex flex-col space-y-2">
        {RecentData.map((item) => (
          <RecentItem
            title={item.title}
            description={item.description}
            time={item.time}
          />
        ))}
      </div>
      <div className="w-full border mt-5 border-gray-500 bg-gray-100 rounded-xl p-2">
        <h2 className="font-bold">Quick Actions</h2>
        <div className="flex flex-row space-x-2 my-3 text-white text-sm">
          <div className=" w-[30%]  ">
            <Button style=" bg-blue-600 cursor-pointer">Create Assessment</Button>
          </div>
          <div className="w-[30%]">
            <Button style=" bg-gray-400  cursor-pointer">Register Student</Button>
          </div>
          <div className=" w-[30%]">
            <Button style=" bg-gray-400  cursor-pointer">View All Submissions</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
