import React from 'react';

interface ImageTextPair {
  title: string;
  imageUrl: string;
  description: string;
}

const ImageTextPairs: ImageTextPair[] = [
  {
    title: 'Megaranica Japan',
    imageUrl: '/map/megaranicajapan.png',
    description: 'This is the description for image 1',
  },
  {
    title: 'Snail Ice Planet',
    imageUrl: '/map/snailiceplanet.png',
    description: 'This is the description for image 2',
  },
  // Add more image-text pairs as needed.
];

const ImageTextPage: React.FC = () => {
  return (
    <div className='bg-story'>
      {ImageTextPairs.map((pair, index) => (
        <div
          key={index}
          className={`flex flex-row ${index % 2 === 0 ? 'flex-row-reverse' : ''} my-4`}
        >
          <div className="w-1/2">
            <img src={pair.imageUrl} alt={pair.description} className="w-full object-cover" />
          </div>
          <div className="w-1/2 flex items-center px-4">
            <p>{pair.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageTextPage;
