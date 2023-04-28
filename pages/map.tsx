import React from 'react';
import ImageMap from '../components/imagemap';
import Head from 'next/head';

const Map: React.FC = () => {
  const areas = [
    { shape: 'rect', coords: '0,0,100,100', href: '/link1', alt: 'Link 1' },
    { shape: 'rect', coords: '100,0,200,100', href: '/link2', alt: 'Link 2' },
    { shape: 'rect', coords: '200,0,300,100', href: '/link3', alt: 'Link 3' },
  ];

  const descriptions = ['リンク1の説明', 'リンク2の説明', 'リンク3の説明'];

  return (
    <div>
      <Head>
        <title>Megaranica World</title>
      </Head>
      <div className="container mx-auto bg-black">
        <ImageMap
          imagePath="./map.png"
          alt="Megaranica map"
          mapName="Megaranica map"
          areas={areas}
          descriptions={descriptions}
        />
      </div>
    </div>
  );
};

export default Map;
