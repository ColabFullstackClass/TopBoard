import StatsCard from "../../components/ui/StatsCard";
import SubmissionItem from "../../components/tutor/SubmissionItem";

interface StatCard {
  amount: number;
  description: string;
}

interface Submission {
  id: number;
  name: string;
  class: string;
  date: string;
  grade: number | null;
  isGraded: boolean;
}

const stats: StatCard[] = [
  { amount: 3, description: "Active Classes" },
  { amount: 47, description: "Total Students" },
  { amount: 12, description: "Active Assessments" },
  { amount: 89, description: "Pending Grades" },
];

const submissions: Submission[] = [
  {
    id: 1,
    name: "Alex Johnson",
    class: "Class",
    date: "2h ago",
    grade: 95,
    isGraded: true,
  },
  {
    id: 2,
    name: "Jamie Smith",
    class: "Class",
    date: "1d ago",
    grade: null,
    isGraded: false,
  },
  {
    id: 3,
    name: "Taylor Wilson",
    class: "Class",
    date: "1d ago",
    grade: 87,
    isGraded: true,
  },
  {
    id: 4,
    name: "Morgan Lee",
    class: "Class",
    date: "2d ago",
    grade: null,
    isGraded: false,
  },
];

const GradeAssessments = () => {
  return (
    <div className="px-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-[18px] font-medium text-[#303240] leading-[22px] ">
          Grade Submissions: React To-Do App
        </h1>
        <p className="text-[14px] leading-[100%] text-[#8E91A1] font-regular mt-1">
          Review and grade student submissions for this assessment
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 ">
        {stats.map((stat, index) => (
          <div key={index}>
            <StatsCard amount={stat.amount} description={stat.description} />
          </div>
        ))}
      </div>

      <div>
        <div className="flex justify-between items-center mb-6 mx-5">
          <h2 className="text-lg leading-[100%] font-normal text-[#8E91A1]">
            Submission List
          </h2>
          <button className="flex items-center gap-2 text-sm text-[#8E91A1] hover:text-gray-900">
            {/* <FiFilter className="w-4 h-4" />
             */}
             <img src="/FadersHorizontal.png" alt="Filter Icon" />
            Filter
          </button>
        </div>

        <div className="space-y-4">
          {submissions.map((submission) => (
            <SubmissionItem
              key={submission.id}
              index={submissions.findIndex((s) => s.id === submission.id) + 1}
              studentName={submission.name}
              className={submission.class}
              submissionDate={submission.date}
              isGraded={submission.isGraded}
              grade={submission.grade !== null ? submission.grade : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradeAssessments;
