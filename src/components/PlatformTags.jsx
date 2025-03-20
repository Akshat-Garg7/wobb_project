import React from "react";
import { FaTiktok ,FaYoutube,FaInstagram,FaTwitter  } from "react-icons/fa";


const PlatformIcon = ({ platform }) => {
  switch (platform.toLowerCase()) {
    case 'instagram':
      return <FaInstagram  className="h-4 w-4" />;
    case 'youtube':
      return <FaYoutube  className="h-4 w-4" />;
    case 'twitter':
      return <FaTwitter className="h-4 w-4" />;
    case 'tiktok':
      return <FaTiktok className="h-4 w-4"/>
    default:
      return null;
  }
};

const PlatformTags = ({ platforms }) => {
  return (
    <div className="flex flex-wrap mt-2">
      {platforms.map((platform, index) => (
        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded mr-1.5 mb-1.5 flex items-center">
          <PlatformIcon platform={platform} />
          <span className="ml-1">{platform}</span>
        </span>
      ))}
    </div>
  );
};
export default PlatformTags;