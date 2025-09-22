import { MoreVertical } from "lucide-react";

interface SubmissionItemProps {
  index: number;
  studentName: string;
  className: string;
  submissionDate: string;
  isGraded: boolean;
  grade?: number;
}

const SubmissionItem = ({
  index,
  studentName,
  className,
  submissionDate,
  isGraded,
  grade,
}: SubmissionItemProps) => {
  return (
    <div className="flex items-center justify-between bg-[#FFFFFF] p-4 border-b-[3px] border-[#F4F4F4] last:border-0">
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-50 text-gray-500 text-xs font-medium">
          {index}
        </div>
        <div>
          <h4 className="text-base font-semibold text-[#303240]">
            {studentName}
          </h4>
          <p className="text-sm text-gray-500">
            {className}  {submissionDate}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        {isGraded ? (
          <>
            <span></span>
            <button
              className="px-[24px] py-[12px] text-sm font-medium leading-[100%] bg-[#1E1F27] text-[#FFFFFF] rounded-full flex cursor-pointer"
              aria-label="More options"
            >
              Graded: {grade}%
              <MoreVertical className="w-3 h-3" />
            </button>
          </>
        ) : (
          <button
            className="px-[35px] py-[12px] text-[14px] leading-[100%] font-medium cursor-pointer bg-[#029BD9] text-[#FFFFFF] rounded-full "
            aria-label="Grade now"
          >
            Grade Now
          </button>
        )}
      </div>
    </div>
  );
};

export default SubmissionItem;
