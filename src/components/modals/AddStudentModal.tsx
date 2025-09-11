import React from "react";

const AddStudentOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl p-6 w-[659px] shadow-lg">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <p className="px-4 py-2 text-sm font-medium border-black text-black">
            Student Enrollment
          </p>

          <p className="px-4 py-2 text-sm font-medium text-gray-500">
            Add New Student
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Student Name
            </label>
            <input
              type="text"
              placeholder="Student Name"
              className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Student Email
            </label>
            <input
              type="email"
              placeholder="Student Email"
              className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Student ID
            </label>
            <input
              type="text"
              className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Cohort</label>
            <select className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none">
              <option value="">Select Cohort</option>
              <option value="">FULL Stack</option>
              <option value="">Data Science</option>
              <option value="">Cyber Security</option>
              <option value="">Front-End</option>
              <option value="">Back-End</option>
              <option value="">Blockchain</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Enrollment Date
            </label>
            <input
              type="date"
              className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              className="px-5 py-2 border border-gray-300 rounded-full text-sm"
            >
              Save As Draft
            </button>
            <button
              type="button"
              className="px-5 py-2 bg-black text-white rounded-full text-sm"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentOverlay;
