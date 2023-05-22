import React from 'react';
import ImageMap from '../components/imagemap';
import Head from 'next/head';
import "../styles/Home.module.css";

const Map: React.FC = () => {
  const mobileImages = [
    '/map/megaranicajapan.png',
    '/map/snailiceplanet.png',
    '/map/magicaldaemonland.png'
  ];
  
  const areas = [
    { shape: 'circle', coords: '225,520,80',     href: '/wp', alt: 'Megaranica Japan' , className: 'mapArea' },
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
    <div className='pt-10'>
      <Head>
        <title>Megaranica's Map</title>
      </Head>
      
      <div className='flex justify-center items-center bg-megaranica'>
        <h1 className="text-4xl md:text-6xl m-2 font-sansita leading-tight text-white">Megaranica's Story</h1>
      </div>
      <p className="text-white text-lg leading-normal pt-10 px-80 text-center ">
        It is said that there are countless "other worlds" within our world, and one of them is called "Megaranica." 
      </p>
      <p className="text-white text-lg leading-normal pt-4 px-80 pb-4 text-center ">
        It is a mysterious world that is both cute and somewhat poisonous. 
      </p>
      <p className="text-white text-lg leading-normal px-80 pb-10 text-center ">
        As a means to boost the population of Megaranica, we are currently seeking immigrants from various parts of the world. 
      </p>
      <div className="flex justify-center pb-10">
        <a href="リンク先URL" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
          More
        </a>
      </div>

      <hr className="my-4 border-gray-800" />

      <div className='flex justify-center items-center bg-megaranica pt-10'>
        <h1 className="text-4xl md:text-6xl m-2 font-sansita leading-tight text-white">Megaranica's Map</h1>
      </div>
      <div className="container mx-auto bg-megaranica px-5">
      <p className="text-white text-lg leading-normal pt-10 px-10 text-center ">
      You have gotten a map of Megaranica. Let's click where you want to go!
      </p>
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
