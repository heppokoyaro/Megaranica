// pages/index.tsx
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const images = [
  '/home/image1.png',
  '/home/image2.png',
  '/home/image3.png',
  '/home/image4.png',
  '/home/image5.png',
  '/home/image6.png',
  '/home/image7.png',
  '/home/image8.png',
  '/home/image9.png',
  '/home/image10.png',
  '/home/image11.png',
  '/home/image12.png',
  '/home/image13.png',
  '/home/image14.png',
  '/home/image15.png',
  '/home/image16.png',
];

const HomePage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Head>
        <title>Megaranica World</title>
      </Head>
      <div className="bg-megaranica min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-3">
          <h1 className="text-5xl md:text-7xl m-1 md:m-8 font-sansita leading-tight">Welcome to Megaranica!</h1>
          <p className="m-1 md:m-8 text-1xl md:text-2xl leading-normal">
            "Gesyu's Megaranica friends!" is an NFT character content created by Japanese artist gesyutaruto.<br />It features a cute but somewhat poisonous world. Why don't you enjoy the world I create?
          </p>
        </div>
        <div className="w-full md:w-1/2 p-2 md:m-8">
          <img
            src={images[currentImageIndex]}
            alt="Slideshow Image"
            className="w-full object-scale-down"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
