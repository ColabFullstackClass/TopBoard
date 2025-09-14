import ClassCard from "./ClassCard";

const MyClasses = () => {
    return (
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
    );
};

export default MyClasses;
