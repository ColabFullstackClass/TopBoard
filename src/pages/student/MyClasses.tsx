import Studentclasses from "../../components/dashboard/Studentclasses";
import StudentTable from "../../components/dashboard/StudentTable";
const MyClasses = () => {
  return (
    <div className="flex justify-between">
      <StudentTable />
      <Studentclasses />
    </div>
  );
};

export default MyClasses;
