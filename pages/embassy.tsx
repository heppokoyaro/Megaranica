// pages/index.tsx
import React, { useEffect, useState } from 'react';
import EmbedCode from '../components/embedcode';

const EmbassyPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/mint/bg_small.png')] bg-center bg-no-repeat bg-mint">
      <div className="w-full md:w-3/5 lg:w-3/5 text-2xl flex items-center justify-center ml-auto">
        <EmbedCode />
      </div>
    </div>
  );
};

export default EmbassyPage;
