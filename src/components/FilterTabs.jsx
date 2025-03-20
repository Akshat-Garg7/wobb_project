import React from "react";

const FilterTabs = ({ activeFilter, setActiveFilter }) => {
    const filters = [
      { id: 'all', label: 'All Campaigns' },
      { id: 'fixed', label: 'Fixed Pay' },
      { id: 'barter', label: 'Barter' },
      { id: 'commission', label: 'Commission' },
      { id: 'available', label: 'Available Slots' },
      { id: 'filled', label: 'Filled' }
    ];
  
    return (
      <div className="flex overflow-x-auto mb-6 pb-2 scrollbar-hide">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`mr-2 px-4 py-2 rounded-full whitespace-nowrap ${activeFilter === filter.id ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    );
  };

export default FilterTabs;