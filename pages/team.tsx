import React from 'react';
import { members } from '../components/members';
import { FaTwitter, FaGlobe } from "react-icons/fa";
import { SiOpensea } from "react-icons/si";
import { Tweet } from 'react-twitter-widgets'

const TeamPage: React.FC = () => {
  // const excHubDescription = "ExCHubはエンジニアとクリエイター間での情報交換やプロジェクト創出の場となるコミュニティです";
  const excHubWebsite = "https://exchubcrypto.wixsite.com/home";
  const excHubTwitter = "https://twitter.com/exchub_crypto";

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
              <h2 className="text-xl font-bold mt-4 text-black">{member.name}</h2>
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
      <h1 className="text-4xl font-sansita mt-16 mb-1">Presented By</h1>
      <div className="flex justify-center items-center my-8">
        <a href={excHubWebsite} target="_blank" rel="noopener noreferrer">
          <img src='/team/logo.png' alt='ExC Hub logo' className='mx-auto' />
        </a>
      </div>
      <div className="flex justify-center">
        <Tweet tweetId="1644795605653528576" />
      </div>
    </div>
  );
};

export default TeamPage;