import { useState } from "react";
const CreateAssessment: React.FC = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "",
    score: "",
    dueDate: "",
    duration: "",
    submissionLink: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          <span className="text-gray-400 text-sm mr-2">Assessment | </span>
          Create New Assessment 
          <span className="text-gray-400 ml-2">REACT 001</span>
        </h2>

        {/* Assessment Title */}
        <div className="mb-4">
          <label className="text-gray-500 text-sm mb-1 block">Assessment Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            type="text"
            placeholder="e.g code breakdown"
            className="w-full mb-4 px-4 py-2 bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-gray-500 text-sm mb-1 block">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="e.g this is to further explain what students are expected to do"
            className="w-full px-4 py-2 bg-gray-100 mb-3 rounded-2xl h-34 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Assessment Type & Score */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-gray-500 text-sm mb-1 block">Assessment Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full p-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Type</option>
              <option value="quiz">Quiz</option>
              <option value="assignment">Assignment</option>
            </select>
          </div>
          
          <div>
            <label className="text-gray-500 text-sm mb-1 block">Total Score</label>
            <input
              name="score"
              value={form.score}
              onChange={handleChange}
              type="number"
              className="w-full p-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          </div>

          {/* Date & Duration */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-gray-500 text-sm mb-1 block">Due Date</label>
              <input
                name="dueDate"
                value={form.dueDate}
                onChange={handleChange}
                type="date"
                className="w-full px-4 py-2.5 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <label className="text-gray-500 text-sm mb-1 block">Duration</label>
            <select
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value=""></option>
              <option value="30min">30 Minutes</option>
              <option value="1h">1 Hour</option>
              <option value="2h">2 Hours</option>
            </select>
            </div>
          </div>

          {/* Submission Link */}
          <div className="mb-6">
            <label className="text-gray-500 text-sm mb-1 block">Submission Links</label>
            <input
              name="submissionLink"
              value={form.submissionLink}
              onChange={handleChange}
              type="url"
              placeholder="Paste link here"
              className="w-full mb-6 p-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
            className="cursor-pointer bg-white text-gray-600 border border-gray-300 py-3 px-6 rounded-3xl"
            >Save As Draft</button>

            <button
              className="cursor-pointer py-3 px-6 bg-black text-white rounded-3xl"
            >Create Assessment</button>
          </div>
      </div>
    </div>
  );
}

export default CreateAssessment;
