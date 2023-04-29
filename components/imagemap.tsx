import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

// プロパティの型定義
interface Props {
  MapImage: string;
  MobileImage: string[];
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

// ImageMapコンポーネント
const ImageMap: React.FC<Props> = ({ MapImage, MobileImage, alt, mapName, areas, descriptions }) => {
  // モバイルデバイスかどうかを判定
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  // スケーリングされたエリアの座標を保持するためのステート
  const [scaledAreas, setScaledAreas] = useState(areas);
  // 画像要素への参照
  const imgRef = useRef<HTMLImageElement>(null);

  // ウィンドウサイズが変わったときにリンク範囲を更新するためのuseEffect
  useEffect(() => {
    if (!isMobile) {
      const handleResize = () => {
        if (imgRef.current) {
          // 画像の現在の幅と元の幅の比率を計算
          const scale = imgRef.current.clientWidth / imgRef.current.naturalWidth;
          // 新しいエリア座標を計算
          const newAreas = areas.map((area) => {
            const coords = area.coords
              .split(',')
              .map((coord) => Math.round(parseInt(coord) * scale))
              .join(',');
            return { ...area, coords };
          });
          // スケーリングされた座標を設定
          setScaledAreas(newAreas);
        }
      };

      // イベントリスナーを追加
      window.addEventListener('resize', handleResize);
      handleResize();

      // イベントリスナーをクリーンアップ
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [areas, isMobile]);

// モバイルデバイスの場合の表示
if (isMobile) {
  return (
    <div className="flex flex-col space-y-4">
      {areas.map((area, index) => (
        <div key={index} className="flex flex-row space-x-4 items-center justify-center">
          {index % 2 === 0 ? (
            <>
              <a href={area.href} className="flex-1">
                <img src={MobileImage[index]} alt={alt} className="w-full" />
              </a>
              <p className="flex-1 font-sansita text-center text-2xl p-3">{descriptions[index]}</p>
            </>
          ) : (
            <>
              <p className="flex-1 font-sansita text-center text-2xl p-3">{descriptions[index]}</p>
              <a href={area.href} className="flex-1">
                <img src={MobileImage[index]} alt={alt} className="w-full" />
              </a>
            </>
          )}
        </div>
      ))}
    </div>
  );
}


  // デスクトップデバイスの場合の表示
  return (
    <div className="flex justify-center">
      <div>
        <img
          src={MapImage}
          alt={alt}
          useMap={`#${mapName}`}
          ref={imgRef}
          className="w-full object-contain"
        />
        <map name={mapName}>
          {scaledAreas.map((
          area, index) => (
            <area
            key={index}
            shape={area.shape}
            coords={area.coords}
            href={area.href}
            alt={area.alt}
            title={descriptions[index]}
          />
        ))}
      </map>
    </div>
  </div>
);
};

export default ImageMap;

