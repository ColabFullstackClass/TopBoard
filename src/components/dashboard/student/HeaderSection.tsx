import React from "react";

interface HeaderSectionProps {
    changeActiveTab: (tab: string) => void;
    activeTab: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
    changeActiveTab,
    activeTab,
}: HeaderSectionProps) => {
    return (
        <div className="space-y-2">
            <h1 className="text-[18px] leading-[22px] font-bold text-[#303240]">
                Welcome, John Doe
            </h1>
            <p className="text-[14px] leading-[100%] font-normal text-[#8E91A1]">
                Manage your classes and activities smoothly
            </p>
            <div className="flex justify-between border-b border-[#F4F4F4] mt-8">
                <div className="gap-4 flex">
                    <button
                        onClick={() => changeActiveTab("My Classes")}
                        className={
                            activeTab === "My Classes"
                                ? "text-[#029BD9] border-b-[2px] border-[#029BD9] text-[14px] pb-2"
                                : "text-[#666979] text-[14px] pb-2"
                        }
                    >
                        My Classes
                    </button>
                    <button
                        onClick={() => changeActiveTab("Assessments")}
                        className={
                            activeTab === "Assessments"
                                ? "text-[#029BD9] border-b-[2px] border-[#029BD9] text-[14px] pb-2"
                                : "text-[#666979] text-[14px] pb-2"
                        }
                    >
                        Assessments (1)
                    </button>
                    <button
                        onClick={() => changeActiveTab("Leaderboard")}
                        className={
                            activeTab === "Leaderboard"
                                ? "text-[#029BD9] border-b-[2px] border-[#029BD9] text-[14px] pb-2"
                                : "text-[#666979] text-[14px] pb-2"
                        }
                    >
                        Leaderboard
                    </button>
                </div>
                <div>
                    <p className="flex gap-3 font-normal leading-[100%] text-[#848797]">
                        Class <img src="/Rectangle 1035.png" alt="/" />
                        <span className="text-[#666979] font-medium  leading-[100%]">
                            {" "}
                            React Fundamentals
                        </span>{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;
