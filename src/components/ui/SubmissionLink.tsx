import React from 'react';

interface Submission {
  id: string;
  name: string;
  code: string;
  submittedDate?: string;
  status: 'graded' | 'pending' | 'overdue';
  grade?: string;
}

interface SubmissionListProps {
  submissions?: Submission[];
}

const SubmissionList: React.FC<SubmissionListProps> = ({ submissions }) => {
  const defaultSubmissions: Submission[] = [
    {
      id: '1',
      name: 'Alice Johnson',
      code: 'REACT-001',
      submittedDate: 'Mar 14, 2024 11:45 PM',
      status: 'graded',
      grade: '95/100'
    },
    {
      id: '2',
      name: 'Bob Smith',
      code: 'REACT-002',
      submittedDate: 'Mar 15, 2024 2:30 PM',
      status: 'pending'
    },
    {
      id: '3',
      name: 'Carol Davis',
      code: 'REACT-003',
      submittedDate: 'Mar 15, 2024 5:15 PM',
      status: 'pending'
    },
    {
      id: '4',
      name: 'David Wilson',
      code: 'REACT-004',
      status: 'overdue'
    }
  ];

  const submissionData = submissions || defaultSubmissions;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'graded':
        return 'border-green-400 bg-green-50';
      case 'pending':
        return 'border-blue-400 bg-blue-50';
      case 'overdue':
        return 'border-red-400 bg-red-50';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  const getStatusButton = (status: string, grade?: string) => {
    switch (status) {
      case 'graded':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500 text-white">
            Graded: {grade}
          </span>
        );
      case 'pending':
        return (
          <button className="inline-flex items-center px-4 py-2 rounded text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            Grade Now
          </button>
        );
      case 'overdue':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded text-sm font-medium text-red-600">
            Not submitted (Overdue)
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Submission List</h2>
      
      <div className="space-y-4">
        {submissionData.map((submission) => (
          <div
            key={submission.id}
            className={`p-4 rounded-lg border-l-4 ${getStatusColor(submission.status)} border border-gray-200`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  {submission.name} ({submission.code})
                </h3>
                {submission.submittedDate ? (
                  <p className="text-sm text-gray-600 mt-1">
                    Submitted: {submission.submittedDate}
                  </p>
                ) : (
                  <p className="text-sm text-red-600 mt-1">
                    Not submitted (Overdue)
                  </p>
                )}
              </div>
              
              <div className="ml-4 flex-shrink-0">
                {getStatusButton(submission.status, submission.grade)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubmissionList;