import { use, useState } from "react";
import nike from "../assets/images/nike.png";
import adidas from "../assets/images/adidas.png";
import Spotify from "../assets/images/Spotify.png";
import sephora from "../assets/images/sephora.png";
import audible from "../assets/images/audible.png";
import airbnb from "../assets/images/airbnb.png"
import nikelogourl from "../assets/images/nikelogourl.jpg";
import sephoralogourl from "../assets/images/sephoralogourl.png";
import audiblelogourl from "../assets/images/audiblelogourl.jpeg"
import spotifylogourl from "../assets/images/spotifylogourl.png";
import adidaslogourl from "../assets/images/adidaslogourl.png";
import airbnblogourl from "../assets/images/airbnblogourl.png";

const useCampaignData = () => {
    const [campaigns] = useState([
      {
        id: 1,
        brandName: "Nike",
        logoUrl: nikelogourl,
        campaignTitle: "Summer Athletics Collection",
        payoutType: "Fixed Pay",
        payoutAmount: "₹5,000",
        additionalBenefit: "Product Worth ₹2,000",
        description: "Showcase our latest athletic wear collection with your unique style.",
        requiredPlatforms: ["Instagram", "YouTube"],
        hired: 12,
        totalSlots: 20,
        imageUrl: nike,
        deadline: "March 30, 2025"
      },
      {
        id: 2,
        brandName: "Sephora",
        logoUrl: sephoralogourl,
        campaignTitle: "Spring Makeup Essentials",
        payoutType: "Barter + Commission",
        payoutAmount: "₹3,200",
        additionalBenefit: "Products Worth ₹8,000",
        description: "Create authentic content featuring our spring makeup collection.",
        requiredPlatforms: ["Instagram", "TikTok"],
        hired: 8,
        totalSlots: 15,
        imageUrl: sephora,
        deadline: "April 5, 2025"
      },
      {
        id: 3,
        brandName: "Audible",
        logoUrl: audiblelogourl,
        campaignTitle: "Audiobook Promotion",
        payoutType: "Fixed Pay",
        payoutAmount: "₹7,500",
        additionalBenefit: "1 Year Free Subscription",
        description: "Share your audiobook experience with our premium subscription.",
        requiredPlatforms: ["Instagram", "Twitter"],
        hired: 5,
        totalSlots: 10,
        imageUrl: audible,
        deadline: "April 10, 2025"
      },
      {
        id: 4,
        brandName: "Adidas",
        logoUrl: adidaslogourl,
        campaignTitle: "Sustainable Sportswear",
        payoutType: "Fixed Pay + Commission",
        payoutAmount: "₹6,000",
        additionalBenefit: "10% on Sales",
        description: "Promote our eco-friendly sportswear collection to your audience.",
        requiredPlatforms: ["Instagram", "YouTube"],
        hired: 15,
        totalSlots: 15,
        imageUrl: adidas,
        deadline: "March 25, 2025"
      },
      {
        id: 5,
        brandName: "Airbnb",
        logoUrl: airbnblogourl,
        campaignTitle: "Local Travel Experiences",
        payoutType: "Fixed Pay",
        payoutAmount: "₹10,000",
        additionalBenefit: "2 Free Stays",
        description: "Share your local travel adventures with our community.Connect with others !",
        requiredPlatforms: ["Instagram", "TikTok", "YouTube"],
        hired: 3,
        totalSlots: 12,
        imageUrl: airbnb,
        deadline: "April 15, 2025"
      },
      {
        id: 6,
        brandName: "Spotify",
        logoUrl: spotifylogourl,
        campaignTitle: "Music Discovery",
        payoutType: "Barter",
        payoutAmount: "₹4,700",
        additionalBenefit: "Premium Family Plan (1 Year)",
        description: "Create content about discovering new music on our platform.",
        requiredPlatforms: ["Instagram", "Twitter"],
        hired: 7,
        totalSlots: 25,
        imageUrl: Spotify,
        deadline: "May 7, 2025"
      }
    ]);
  
    return { campaigns };
  };

export default useCampaignData;