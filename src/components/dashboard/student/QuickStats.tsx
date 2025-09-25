import React from "react";

const stats = [
  { label: "Classes Enrolled", value: "2" },
  { label: "Submitted Assessment", value: "7" },
  { label: "My Rank", value: "2nd" },
  { label: "Average grade", value: "87%", highlight: true },
];

const QuickStats: React.FC = () => {
  return (
    <div className="grid space-y-3 justify-center ">
      <div className="flex justify-between  items-center border-b px-[12px] border-[#F4F4F4] py-[12px]">
        <span className="text-[#8E91A1] text-[14px] font-medium">
          Quick Stats
        </span>
        <button className="text-sm text-gray-500">
          <img src="/Vector.png" alt="Quick Stats Icon" />
        </button>
      </div>
      {stats.map((stat, idx) => (
  <div
    key={idx}
    className={`bg-[#F4F4F4] h-[100px] w-[220px] rounded-[24px] flex flex-col items-center justify-center text-center gap-2 ${
      stat.highlight
        ? "text-[#059669] font-bold leading-[100%] text-[32px]"
        : "text-[#303240] font-medium"
    }`}
  >
    <div className="font-bold text-[32px] leading-[100%]">
      {stat.value}
    </div>
    <div className="text-sm font-normal leading-[100%] text-[#666979]">
      {stat.label}
    </div>
  </div>
))}
    </div>
  );
};

export default QuickStats;
