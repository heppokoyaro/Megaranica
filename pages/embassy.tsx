// pages/index.tsx
import React, { useEffect, useState } from 'react';
import EmbedCode from '../components/embedcode';

const EmbassyPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/mint/bg_small.png')] bg-center bg-no-repeat">
      <div className="w-full md:w-1/3 lg:w-1/3 text-red-600 text-4xl">
        <EmbedCode />
      </div>
    </div>
  );
};

export default EmbassyPage;