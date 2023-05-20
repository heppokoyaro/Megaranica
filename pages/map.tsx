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
    { shape: 'circle', coords: '225,520,80',     href: '/', alt: 'Megaranica Japan' },
    { shape: 'rect',   coords: '100,64,368,245', href: '/', alt: 'Snail Ice Planet' },
    { shape: 'circle', coords: '757,420,190',    href: '/', alt: 'Magical Daemon Land' },
    { shape: 'rect',   coords: '80,400,138,500', href: '/claim', alt: 'Embassy' },
  ];

  const descriptions = [
    'Megaranica Japan', 
    'Snail Ice Planet', 
    'Magical Daemon Land'
  ];

  return (
    <div>
      <Head>
        <title>Megaranica's Map</title>
      </Head>
      <div className='flex justify-center items-center bg-megaranica'>
        <h1 className="text-4xl md:text-6xl m-2 font-sansita leading-tight text-white">Megaranica's Map</h1>
      </div>
      <div className="container mx-auto bg-megaranica">
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
