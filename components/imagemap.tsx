import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface Props {
  imagePath: string;
  alt: string;
  mapName: string;
  areas: Array<{
    shape: string;
    coords: string;
    href: string;
    alt: string;
  }>;
  descriptions: string[];
}

const ImageMap: React.FC<Props> = ({ imagePath, alt, mapName, areas, descriptions }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-4">
        {areas.map((area, index) => (
          <div key={index} className="flex space-x-4">
            <a href={area.href}>
              <img src={imagePath} alt={alt} className="w-1/2" />
            </a>
            <p className="w-1/2">{descriptions[index]}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div>
        <img src={imagePath} alt={alt} useMap={`#${mapName}`} />
        <map name={mapName}>
          {areas.map((area, index) => (
            <area key={index} shape={area.shape} coords={area.coords} href={area.href} alt={area.alt} />
          ))}
        </map>
      </div>
    </div>
  );
};

export default ImageMap;
