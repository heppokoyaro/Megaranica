// members.ts

type Member = {
  name: string;
  title: string;
  profileImage: string;
  twitter: string;
  profile: string;
};

export const members: Member[] = [
  {
    name: "Gesyutaruto",
    title: "ILLUSTRATOR",
    profileImage: "/team/gesyutaruto.png",
    twitter: "https://twitter.com/furagu2525",
    profile: "イラストレーター。メガラニカの世界観を表現するために、キャラクターのデザインを担当。"
  },
  {
    name: "あゆせ",
    title: "CO-FOUNDER",
    profileImage: "/team/ayuse.png",
    twitter: "https://twitter.com/ayuse_crypto",
    profile: "可愛いものが好き。ファウンダーとして毎日活動している良い人。",
  },
  {
    name: "heppokoyaro",
    title: "ENGINEER",
    profileImage: "/team/heppokoyaro.png",
    twitter: "https://twitter.com/CryptoHamHepyar",
    profile: "少しプログラムができるハムスター。メガラニカのサイトを作成している。",
  },
];