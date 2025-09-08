import React from "react";

const CreateAssessmentModal: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[659px]">
        <h2 className="text-sm text-gray-500 mb-1">
          Assessment{" "}
          <span className="text-black font-semibold">
            | Create New Assessment REACT 001
          </span>
        </h2>

        {/* Assessment Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Assessment Title
          </label>
          <input
            type="text"
            placeholder="e.g code breakdown"
            className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            placeholder="e.g this is to further explain what students are expected to do"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm h-24 resize-none focus:outline-none"
          />
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Assessment Type
            </label>
            <select className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none">
              <option value="">Select Type</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Total Score
            </label>
            <select className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none">
              <option value="">Select Score</option>
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Due Date</label>
            <select className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none">
              <option value="">Select Date</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Duration</label>
            <select className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none">
              <option value="">Select Duration</option>
            </select>
          </div>
        </div>

        {/* Submission Links */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Submission Links
          </label>
          <select className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none">
            <option value="">Select Link</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button className="border border-gray-300 rounded-full px-4 py-2 text-sm">
            Save As Draft
          </button>
          <button className="bg-black text-white rounded-full px-4 py-2 text-sm">
            Create Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAssessmentModal;
