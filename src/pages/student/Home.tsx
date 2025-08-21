import React from 'react';
import HeaderSection from '../../components/dashboard/student/HeaderSection';
import ClassCard from '../../components/dashboard/student/ClassCard';
import QuickStats from '../../components/dashboard/student/QuickStats';
import RecentGradesDropdown from '../../components/dashboard/student/RecentGradesDropdown';

const StudentHome: React.FC = () => {
    return (
    <div className="flex flex-col lg:flex-row w-full h-full p-6 gap-6 bg-[#ffff]">
      <div className="flex-1 space-y-6">
        <HeaderSection />
        <div className="space-y-4">
          <ClassCard
            title="React Fundamentals"
            students={15}
            assessments={3}
            hasOutstanding
            borderColor="border-red-300"
            buttonColor="bg-[#029BD9]"
          />
          <ClassCard
            title="React Fundamentals"
            students={15}
            assessments={3}
            borderColor="border-gray-300"
          />
          <ClassCard
            title="React Fundamentals"
            students={15}
            assessments={3}
            borderColor="border-yellow-300 "
          />
          <ClassCard
            title="React Fundamentals"
            students={15}
            assessments={3}
            borderColor="border-green-300"
          />
        </div>
      </div>
      <div className="w-full lg:w-64 space-y-4">
        <QuickStats />
        <RecentGradesDropdown />
      </div>
    </div>
  );
};

export default StudentHome; 