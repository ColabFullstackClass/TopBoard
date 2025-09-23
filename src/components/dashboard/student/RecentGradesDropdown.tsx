import React from 'react';

const RecentGradesDropdown: React.FC = () => {
  return (
    <div className="bg-[#F4F4F4] ml-4 mt-17 py-[8px] px-[20px] h-[50px] w-[220px] rounded-[24px] border border-[#D9D9D9]">
      <div className="flex justify-between items-center mt-1">
        <span className="text-gray-800 font-medium">Recent Grades</span>
        <button className="text-sm text-gray-500">
          <img src="/CaretDown.png" alt="Recent Grades Icon" />
        </button>
      </div>
    </div>
  );
};

export default RecentGradesDropdown;
