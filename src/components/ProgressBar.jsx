import React from "react";

const ProgressBar = ({ hired, totalSlots }) => {
    const progressPercentage = (hired / totalSlots) * 100;
    const isFilled = hired >= totalSlots;
    
    return (
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-500">Hired: {hired}/{totalSlots}</span>
          {isFilled ? (
            <span className="text-red-500 font-medium">Filled</span>
          ) : (
            <span className="text-green-500 font-medium">{totalSlots - hired} slots left</span>
          )}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${isFilled ? 'bg-red-500' : 'bg-green-500'}`} 
            style={{ width: `${progressPercentage}%` }}>
          </div>
        </div>
      </div>
    );
  };
export default ProgressBar;