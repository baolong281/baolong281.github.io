import { BlockSection } from "~/components/Block";

export const getWorks = (): BlockSection[] => {
  const post1 = {
    title: "img2math",
    description: "chrome extension for converting images into TeX code",
    links: [
      {
        sourceLink: "https://github.com/baolong281/img2math",
        linkTitle: "github",
      },
    ],
  };

  return [
    {
      posts: [post1],
      sectionTitle: "deep learning",
    },
  ];
};
