// pages/team.tsx

import React from 'react';
import { members } from '../components/members';
import { FaTwitter, FaInstagram } from "react-icons/fa";

const TeamPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={member.profileImage} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-bold mt-4">{member.name}</h2>
            <p className="text-gray-600">{member.title}</p>
            <div className="mt-4 flex items-center">
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-500 w-6 h-6 mr-3" />
              </a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
