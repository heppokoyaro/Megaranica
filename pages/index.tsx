// pages/index.tsx
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const images = [
  '/home/image1.jpg',
  '/home/image2.jpg',
  '/home/image3.jpg',
  '/home/image4.jpg',
  '/home/image5.jpg',
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
        <div className="w-full md:w-1/2 p-5 md:m-8">
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
