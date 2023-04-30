import React from 'react';
import Link from 'next/link';

const cards = [
  // 他のカードのデータを追加する場合は、ここにオブジェクトを追加する。
  {
    image: 'claim/1.png',
    title: 'Megaranica 1st NFT PJ',
    link: '/', // このリンクは実際のリンク先に置き換える。
  },
  {
    image: 'claim/1.png',
    title: 'Megaranica 1st NFT PJ',
    link: '/', // このリンクは実際のリンク先に置き換える。
  },
];

const ClaimPage: React.FC = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <img
          src="/claim/bg.png"
          alt="Background"
          className="w-full object-cover h-40 md:h-80"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-7xl font-sansita">
          Claim
        </h1>
      </div>
      <div className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <Link href={card.link} key={index}>
            <div
              className="h-40 md:h-80 bg-cover bg-center bg-no-repeat rounded-card relative dark-overlay"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4 rounded-md">
                <h3 className="text-white font-sansita text-center text-xl">{card.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClaimPage;
