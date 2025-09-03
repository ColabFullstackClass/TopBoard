import React from 'react';

const HeaderSection: React.FC = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-[18px] leading-[22px] font-bold text-[#303240]">Welcome, John Doe</h1>
      <p className="text-[14px] leading-[100%] font-normal text-[#8E91A1]">Manage your classes and activities smoothly</p>
      <div className="flex justify-between border-b border-[#F4F4F4] mt-4">
        <div className='gap-4 flex'>
        <button className="text-[#029BD9] border-b-[2px] border-[#029BD9] text-[14px] pb-2">My Classes</button>
        <button className="text-[#666979] text-[14px] pb-2">Assessments (1)</button>
        <button className="text-[#666979] text-[14px] pb-2">Leaderboard</button>
        </div>
        <div>
           <p className='flex gap-3 font-normal leading-[100%] text-[#848797]'>Class <img src="/Rectangle 1035.png" alt="/" /><span className='text-[#666979] font-medium  leading-[100%]'> React Fundamentals</span> </p>
        </div>
      </div> 
    </div>
  );
};

export default HeaderSection;
