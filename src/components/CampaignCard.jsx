import React from "react";
import PlatformTags from "./PlatformTags";
import PayoutInfo from "./PayoutInfo";
import ProgressBar from "./ProgressBar";

const CampaignCard = ({ campaign }) => {
    const isFilled = campaign.hired >= campaign.totalSlots;
    
    return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="relative h-48 w-full overflow-hidden">
          <img src={campaign.imageUrl} alt={campaign.campaignTitle} className="w-full h-full object-cover" />
          <div className="absolute top-3 left-3 bg-white rounded-lg px-2 py-1 shadow-sm">
            <div className="flex items-center">
              <img src={campaign.logoUrl} alt={campaign.brandName} className="w-5 h-5 rounded-full" />
              <span className="ml-1.5 text-sm font-medium text-gray-900">{campaign.brandName}</span>
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{campaign.campaignTitle}</h3>
            <PlatformTags platforms={campaign.requiredPlatforms} />
          </div>
          
          <PayoutInfo 
            payoutType={campaign.payoutType}
            payoutAmount={campaign.payoutAmount}
            additionalBenefit={campaign.additionalBenefit}
            deadline={campaign.deadline}
          />
          
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{campaign.description}</p>
          
          <ProgressBar hired={campaign.hired} totalSlots={campaign.totalSlots} />
          <button 
            className={`w-full mt-4 py-2 px-4 rounded-lg font-medium ${
              isFilled 
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
            disabled={isFilled}
          >
            {isFilled ? 'No Slots Available' : 'Apply Now'}
          </button>
        </div>
      </div>
    );
  };
  export default CampaignCard;