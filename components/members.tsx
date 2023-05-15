// members.ts

type Member = {
  name: string;
  title: string;
  profileImage: string;
  twitter: string;
  opensea: string;
  profile: string;
};

export const members: Member[] = [
  {
    name: "Gesyutaruto",
    title: "ILLUSTRATOR",
    profileImage: "/team/gesyutaruto.png",
    twitter: "https://twitter.com/furagu2525",
    opensea: "https://opensea.io/collection/gesyu-s-megaranica-friends",
    profile: "画家、イラストレーター。カワイイけれど、どこか毒のある独自の世界観をテーマに創作活動を続ける。"
  },
  {
    name: "あゆせ",
    title: "CO-FOUNDER",
    profileImage: "/team/ayuse.png",
    twitter: "https://twitter.com/ayuse_crypto",
    opensea: "https://opensea.io/collection/tomatochan",
    profile: "可愛いものが好き。ファウンダーとして毎日活動している良い人。",
  },
  {
    name: "heppokoyaro",
    title: "ENGINEER",
    profileImage: "/team/heppokoyaro.png",
    twitter: "https://twitter.com/CryptoHamHepyar",
    opensea: "https://opensea.io/collection/hamgra",
    profile: "少しプログラムができるハムスター。メガラニカのサイトを作成している。",
  },
];
