// components/mintbutton.tsx
import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';

interface MintButtonProps {
  link: string;
}

const MintButton: React.FC<MintButtonProps> = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        <span>詳細を見る</span>
        <ArrowRightIcon className="w-5 h-5 ml-2" />
      </button>
    </a>
  );
};

export default MintButton;
