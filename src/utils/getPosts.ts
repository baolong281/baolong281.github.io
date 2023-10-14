import { type BlockSection } from "~/components/Block";

export const getWorks = (): BlockSection[] => {
  const img2math = {
    title: "img2math",
    description:
      "Deep learning powered chrome extension that converts images into LaTeX equations. WIP.",
    links: [
      {
        sourceLink: "https://github.com/baolong281/img2math",
        linkTitle: " github",
      },
    ],
  };

  const goobergrad = {
    title: "sillygrad",
    description:
      "Autograd engine written in C++ and accelerated with CUDA.",
    links: [
      {
        sourceLink: "https://github.com/baolong281/sillygrad",
        linkTitle: " github",
      },
      {
        sourceLink: "https://github.com/karpathy/micrograd",
        linkTitle: " micrograd",
      },
    ],
  };

  const rustslam = {
    title: "rustslam",
    description: "An implementation of monacular orb-slam written in rust. WIP",
    links: [
      {
        sourceLink: "https://github.com/baolong281/rustslam",
        linkTitle: "github",
      },
    ],
  };

  const food_glitch = {
    title: "infinite-food-glitch",
    description:
      "A bot that scraped twitter data for free Chipotle codes during their NBA promotion.",
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
      posts: [food_glitch, rustslam],
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
