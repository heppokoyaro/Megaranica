import React from 'react';
import ImageMap from '../components/imagemap';
import Head from 'next/head';

const Map: React.FC = () => {
  const mobileImages = [
    '/map/megaranicajapan.png',
    '/map/snailiceplanet.png',
    '/map/magicaldaemonland.png'
  ];
  
  const areas = [
    { shape: 'rect', coords: '66,329,347,639', href: '/claim', alt: 'Megaranica Japan' },
    { shape: 'rect', coords: '100,64,368,245', href: '/', alt: 'Snail Ice Planet' },
    { shape: 'rect', coords: '435,96,959,638', href: '/', alt: 'Magical Daemon Land' },
  ];

  const descriptions = [
    'Megaranica Japan', 
    'Snail Ice Planet', 
    'Magical Daemon Land'
  ];

  return (
    <div>
      <Head>
        <title>Megaranica World</title>
      </Head>
      <div className='flex justify-center items-center'>
        <h1 className="text-4xl md:text-6xl m-2 font-sansita leading-tight">Megaranica's Map</h1>
      </div>
      <div className="container mx-auto bg-black">
        <ImageMap
          MapImage="/map/map.png"
          MobileImage={mobileImages}
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
