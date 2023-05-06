// members.ts

type Member = {
  name: string;
  title: string;
  profileImage: string;
  twitter: string;
  instagram: string;
};

export const members: Member[] = [
  {
    name: "Alice",
    title: "CEO",
    profileImage: "/images/alice.jpg",
    twitter: "https://twitter.com/alice",
    instagram: "https://www.instagram.com/alice",
  },
  {
    name: "Bob",
    title: "CTO",
    profileImage: "/images/bob.jpg",
    twitter: "https://twitter.com/bob",
    instagram: "https://www.instagram.com/bob",
  },
  {
    name: "Carol",
    title: "CFO",
    profileImage: "/images/carol.jpg",
    twitter: "https://twitter.com/carol",
    instagram: "https://www.instagram.com/carol",
  },
  {
    name: "David",
    title: "CMO",
    profileImage: "/images/david.jpg",
    twitter: "https://twitter.com/david",
    instagram: "https://www.instagram.com/david",
  },
];
