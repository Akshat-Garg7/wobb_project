import React from "react";
const EmptyState = ({ resetFilter }) => {
    return (
      <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg shadow-sm mt-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        <h3 className="mt-4 text-lg font-medium text-gray-900">No campaigns found</h3>
        <p className="mt-1 text-sm text-gray-500">Try adjusting your filters or check back later for new campaigns.</p>
        <button 
          onClick={resetFilter}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          View All Campaigns
        </button>
      </div>
    );
  };

export default EmptyState;
  