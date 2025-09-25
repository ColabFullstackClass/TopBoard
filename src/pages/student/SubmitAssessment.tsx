import QuickStats from "../../components/dashboard/student/QuickStats";
import RecentGradesDropdown from "../../components/dashboard/student/RecentGradesDropdown";



const SubmitAssessment: React.FC = () => {

  return (
    <div className="flex flex-col lg:flex-row w-full h-full gap-10 bg-[#ffff]">
      <div className="flex-1">
        {/* Assessment Submission Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 mt-6 ">
          {/* Title */}
          <h2 className="text-sm text-gray-500 mb-8">
            Submit Assessment <span className="mx-2 text-gray-200 font-bold">|</span>{" "}
            <span className="font-medium">React Todo App REACT 001</span>
          </h2>

          {/* Description */}
          <h2 className="text-base text-gray-500 mb-2">Assessment Description:</h2>
          <p className="text-gray-700 mb-6">
            Create a fully functional todo application using React with add, edit,
            delete, and mark complete functionality.
          </p>

          {/* Points & Due Date */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 bg-gray-100 rounded-xl p-4">
              <p className="text-2xl font-bold text-center">100</p>
              <p className="text-gray-500 text-sm text-center">Points</p>
            </div>
            <div className="flex-1 bg-gray-100 rounded-xl p-4">
              <p className="text-2xl font-bold text-center">87.3%</p>
              <p className="text-gray-500 text-sm text-center">Due Date</p>
            </div>
          </div>

          {/* Submission Checklist */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
            <h3 className="font-medium text-green-600 mb-2">Submission Checklist</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓✓</span>
                <span>Repository is public and accessible</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓✓</span>
                <span>Live demo is working properly</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓✓</span>
                <span>All required features are implemented</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓✓</span>
                <span>Code is well-documented</span>
              </li>
            </ul>
          </div>


          {/* Form */}
          <div className="space-y-4">

            {/* Student ID */}

            <div>
              <label className="block text-gray-700 font-medium mb-1">Student ID</label>
              <input
                type="text"
                placeholder="e.g code breakdown"
                className="w-full p-3 bg-gray-50 rounded-full focus:ring-2 focus:ring-blue-400 outline-none"
              />

            </div>

            {/* Special Note */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Special Note <span className="text-gray-400 text-sm">(Optional)</span>
              </label>
              <textarea
                placeholder="e.g Any other information you want to attach to your submission"
                className="w-full p-3 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                rows={3}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1">Github Link</label>
                <div className="relative">
                  <input
                    type="url"
                    className="w-full p-3 pr-10 bg-gray-50 rounded-full focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1 ml-1">Live Demo Link</label>
                <div className="relative">
                  <input
                    type="url"
                    className="w-full p-3 pr-10 bg-gray-50 rounded-full focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button className="px-6 py-2 rounded-full border text-gray-400 hover:bg-black hover:text-white">
              Save As Draft
            </button>
            <button className="px-6 py-2 rounded-full border text-gray-400 hover:bg-black hover:text-white">
              Submit Assessment
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-64 space-y-4">
        <QuickStats />
        <RecentGradesDropdown />
      </div>
    </div>
  );
};

export default SubmitAssessment;
