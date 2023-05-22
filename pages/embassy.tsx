// pages/index.tsx
import React, { useEffect, useState } from 'react';
import EmbedCode from '../components/embedcode';

const EmbassyPage: React.FC = () => {
  return (
    <div className='bg-mint' style={{ margin: '4em' }}>
      <div className="flex flex-col items-center justify-center min-h-screen-75 bg-[url('/mint/mintchan.png')] bg-center bg-no-repeat bg-mint bg-cover">
        <div className="w-full md:w-3/5 lg:w-3/5 text-2xl flex items-center justify-center ml-auto">
          <EmbedCode />
        </div>
      </div>
    </div>
  );
};




export default EmbassyPage;
