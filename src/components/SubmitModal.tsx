const SubmitModal = () => {
  return (
    <div>
      <div className="border-1 border-gray-400 rounded-md shadow-xl w-150 ml-85">
        <h1 className="capitalize pt-5 text-blue-800 text-3xl font-bold pl-6 pb-5 ">
          Submit: React todo app
        </h1>
        <div className="pt-3 bg-blue-100 px-7 mx-4 rounded-2xl">
          <h4 className="text-blue-800 font-bold text-xl pb-2">
            Assesment Details
          </h4>
          <span className="flex gap-1 pl-4">
            <p className="font-semibold">Due Date:</p>
            <p>March 15, 2025</p>
          </span>
          <span className="flex gap-1 pl-4">
            <p className="font-semibold">Max Points:</p>
            <p>100</p>
          </span>
          <span className="flex gap-1 pl-4 pb-3">
            <p className="font-semibold">Description:</p>
            <p>
              Create a fully functional todo application using react with add,
              edit, delete and mark as completed functionalty
            </p>
          </span>
        </div>
        <div className="mx-6">
          <div className="w-full flex flex-col space-y-1 pt-4 ">
            <label htmlFor="Student ID" className="w-full font-semibold ml-2">
              Student ID
            </label>
            <input
              type="text"
              className="w-full py-3 pl-4 border rounded-xl border-black outline-none"
              placeholder="REACT-001"
            />
          </div>
          <div className="w-full flex flex-col space-y-1 pt-4">
            <label
              htmlFor="GitHub Repository Link"
              className="w-full font-semibold ml-2"
            >
              GitHub Repository Link *
            </label>
            <input
              type="text"
              className="w-full py-3 pl-4 border rounded-xl border-black outline-none"
              placeholder="https//:github.com/username/react-todolist"
            />
          </div>
          <div className="w-full flex flex-col space-y-1 pt-4">
            <label
              htmlFor="Live Demo Link"
              className="w-full font-semibold ml-2"
            >
              Live Demo Link *
            </label>
            <input
              type="text"
              className="w-full py-3 pl-4 border rounded-xl border-black outline-none"
              placeholder="https//:your-todolist-netilfy-app"
            />
            <p className="ml-2 text-blue-400">
              Deploy on Vercel, Netlify or GitHub-Pages
            </p>
          </div>
          <div className="w-full flex flex-col space-y-1 pt-4">
            <label
              htmlFor="Additional Notes"
              className="w-full font-semibold ml-2"
            >
              Additional Notes
            </label>
            <textarea
              placeholder="Any additinal information about your assignment"
              className="w-full py-3 pl-4 border rounded-xl border-black outline-none"
            ></textarea>
          </div>
        </div>
        <div className="bg-yellow-200 mx-4 mt-6 p-3 rounded-xl">
          <p className="text-red-950 font-semibold">⚠ Submission Checklist</p>
          <div className="flex gap-1 ml-2">
            <input type="checkbox" name="" id="" />
            <p>Repository is public and accessible</p>
          </div>
          <div className="flex gap-1 ml-2">
            <input type="checkbox" name="" id="" />
            <p>Live demo is working properly</p>
          </div>
          <div className="flex gap-1 ml-2">
            <input type="checkbox" name="" id="" />
            <p>All required features are implemeted</p>
          </div>
          <div className="flex gap-1 ml-2">
            <input type="checkbox" name="" id="" />
            <p>Code is well documented</p>
          </div>
        </div>
        <div className="flex justify-end mt-9 gap-4 mr-7 pb-5">
          <button className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700">
            Save as Draft
          </button>
          <button className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-500">
            Submit Assignment
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitModal;
