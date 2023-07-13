import { BlockSection } from "~/components/Block";

export const getWorks = (): BlockSection[] => {
  const img2math = {
    title: "img2math",
    description:
      "Sometimes I'm reading a paper and I see a giant, unexplainable equation that I can't copy but need to search up.\
    The solution? A chrome extension that turns images into TeX equations. WIP",
    links: [
      {
        sourceLink: "https://github.com/baolong281/img2math",
        linkTitle: " github",
      },
    ],
  };

  const goobergrad = {
    title: "goobergrad",
    description:
      "An autograd engine written from scratch in numpy. Based on the micrograd videos by Andrej Karpathy.",
    links: [
      {
        sourceLink: "https://github.com/baolong281/goobergrad.git",
        linkTitle: " github",
      },
      {
        sourceLink: "https://github.com/karpathy/micrograd",
        linkTitle: " micrograd",
      },
    ],
  };

  const food_glitch = {
    title: "infinite-food-glitch",
    description:
      "A bot that scraped twitter data for free Chipotle codes during their NBA promotion. Got lots of free burritos.",
    links: [
      {
        sourceLink: "https://github.com/baolong281/infinite-food-glitch",
        linkTitle: "github",
      },
    ],
  };

  return [
    {
      posts: [img2math, goobergrad],
      sectionTitle: "deep learning",
    },
    {
      posts: [food_glitch],
      sectionTitle: "miscellaneous",
    },
  ];
};

export const getFun = (): BlockSection[] => {
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
