import {IoIosArrowDown} from "react-icons/io";

const Studentclasses = () => {
  return (
    <section className="w-32 mt-5 mr-40">
      <p className="flex items-center justify-between w-56 text-gray-500 ml-5 mb-6 text-right border-b border-gray-300 pb-2">
        Quick Stats <IoIosArrowDown />
      </p>
      <article className="space-y-4">
        <div className="bg-[#F4F4F4] space-y-8 rounded-3xl w-72 h-36 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold">2</h2>
          <p className="text-gray-500">Classes Enrolled</p>
        </div>
        <div className="bg-[#F4F4F4] space-y-8 rounded-3xl w-72 h-36 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold">7</h2>
          <p className="text-gray-500">Submitted Assement</p>
        </div>
        <div className="bg-[#F4F4F4] space-y-8 rounded-3xl w-72 h-36 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold">2nd</h2>
          <p className="">My Rank</p>
        </div>
        <div className="bg-[#F4F4F4] space-y-8 rounded-3xl w-72 h-36 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-[#059669]">87%</h2>
          <p className="text-gray-500">Average grade</p>
        </div>
      </article>
    </section>
  );
};

export default Studentclasses;
