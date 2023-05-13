// pages/team.tsx

import React from 'react';
import { members } from '../components/members';
import { FaTwitter } from "react-icons/fa";
import { SiOpensea } from "react-icons/si";

const TeamPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-6 mt-6 font-sansita">About Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-6">
        {members.map((member, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-center">
                <img src={member.profileImage} alt={member.name} className="max-w-full max-h-full object-cover rounded-xl mx-auto" />
              </div>
              <h2 className="text-xl font-bold mt-2 text-black">{member.name}</h2>
              <p className="text-pink-400">{member.title}</p>
            </div>
            <div className="flex-grow">
              <p className="text-black">{member.profile}</p>
            </div>
            <div className="mt-4 mb-2 flex items-center">
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-500 w-6 h-6 mr-3" />
              </a>
              <a href={member.opensea} target="_blank" rel="noopener noreferrer">
                <SiOpensea className="text-blue-500 w-6 h-6 mr-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-4xl font-sansita mt-8 mb-6">ExC Hub</h1>
    </div>
  );
};

export default TeamPage;
