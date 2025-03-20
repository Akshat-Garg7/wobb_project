import React from "react";
import CampaignCard from "./CampaignCard";
import EmptyState from "./EmptyState";

const CampaignGrid = ({ campaigns, resetFilter }) => {
    return (
      <>
        {campaigns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map(campaign => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        ) : (
          <EmptyState resetFilter={resetFilter} />
        )}
      </>
    );
  };
export default CampaignGrid;