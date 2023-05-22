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
    description: 'The countries of the megaranica world are in many ways slightly different from the world we live in. Before the door to the other world opened, there were only humans, but now the world is inhabited by many different races.',
  },
  {
    title: 'Snail Ice Planet',
    imageUrl: '/map/snailiceplanet.png',
    description: 'This is the mother planet of Mint Snail-chan. The planet has an automated ice cream factory that produces a large number of ice snail races. There is a spaceport where the ice cream import carriers that import the raw materials land.',
  },
  // Add more image-text pairs as needed.
];

const ImageTextPage: React.FC = () => {
  return (
    <div className='bg-story'style={{paddingTop: '2em', paddingLeft: '5em', paddingRight: '5em' }}>
      {ImageTextPairs.map((pair, index) => (
        <div
          key={index}
          className={`flex flex-row ${index % 2 === 0 ? 'flex-row-reverse' : ''} my-4`}
        >
          <div className="w-1/2 flex items-center justify-center" >
            <img src={pair.imageUrl} alt={pair.description} className="w-2/3 object-cover" />
          </div>
          <div className="w-1/2 flex flex-col justify-center p-20">
            <h2 className="text-2xl font-bold mb-4 text-center font-sansita">{pair.title}</h2>
            <div className="flex items-center justify-center">
            <p style={{ textAlign: 'center' }}>{pair.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageTextPage;
