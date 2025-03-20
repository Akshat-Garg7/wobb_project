import React,{useState} from 'react';
import Navbar from './Navbar';
import PageHeader from './PageHeader';
import FilterTabs from './FilterTabs';
import CampaignGrid from './CampaignGrid';
import Footer from './Footer';
import useCampaignData from '../hooks/useCampaignData ';


const WobbHomepage = () => {
    const { campaigns } = useCampaignData();
    const [activeFilter, setActiveFilter] = useState('all');
  
    const filteredCampaigns = () => {
      switch (activeFilter) {
        case 'fixed':
          return campaigns.filter(campaign => campaign.payoutType.includes('Fixed Pay'));
        case 'barter':
          return campaigns.filter(campaign => campaign.payoutType.includes('Barter'));
        case 'commission':
          return campaigns.filter(campaign => campaign.payoutType.includes('Commission'));
        case 'available':
          return campaigns.filter(campaign => campaign.hired < campaign.totalSlots);
        case 'filled':
          return campaigns.filter(campaign => campaign.hired >= campaign.totalSlots);
        default:
          return campaigns;
      }
    };
  
    const resetFilter = () => setActiveFilter('all');
  
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <PageHeader />
          <FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <CampaignGrid campaigns={filteredCampaigns()} resetFilter={resetFilter} />
        </main>
        
        <Footer />
      </div>
    );
  };
  
  export default WobbHomepage;