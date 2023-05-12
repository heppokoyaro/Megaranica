// pages/team.tsx

import React from 'react';
import { members } from '../components/members';
import { FaTwitter } from "react-icons/fa";

const TeamPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-6 font-sansita">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-6">
        {members.map((member, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={member.profileImage} alt={member.name} className="w-full h-48 object-cover rounded-xl" />
            <h2 className="text-xl font-bold mt-4 text-black">{member.name}</h2>
            <p className="text-pink-400">{member.title}</p>
            <p className="text-black">{member.profile}</p>
            <div className="mt-4 flex items-center">
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-500 w-6 h-6 mr-3" />
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
