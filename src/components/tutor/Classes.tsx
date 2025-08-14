interface ClassesProps {
  title: string;
  submission: number;
  studentCount: number;
  assessmentCount: number;
}

const Classes = ({
  title,
  submission,
  studentCount,
  assessmentCount,
}: ClassesProps) => {
  return (
    <div className=" bg-gray-300 rounded-2xl w-130 p-4 space-y-3">
      <div className="flex justify-between items-center">
        <p className="text-semibold">{title}</p>
        <p className="bg-green-300 text-green-500 text-sm rounded-2xl p-1.5">
          {submission} new submission
        </p>
      </div>
      <ul className="list-disc pl-5 text-sm text-gray-600">
        <li>{studentCount} students</li>
        <li>{assessmentCount} assesments</li>
      </ul>
      <button className="bg-black text-white text-center px-12 py-3 rounded-2xl hover:bg-gray-600">
        View Class
      </button>
    </div>
  );
};

export default Classes;
