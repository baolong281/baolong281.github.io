import { type BlockSection } from "~/components/Block";

export const getWorks = (): BlockSection[] => {
  const img2math = {
    title: "img2math",
    description:
      "Deep learning powered chrome extension that converts images into TeX equations, includes a < 50mb model trained by me. WIP.",
    links: [
      {
        sourceLink: "https://github.com/baolong281/img2math",
        linkTitle: " github",
      },
    ],
  };

  const coverizer = {
    title: "coverizer2",
    description:
      "A web app that converts album covers into wallpapers using Stable Diffusion.",
    links: [
      {
        sourceLink: "https://github.com/baolong281/coverizer2",
        linkTitle: " github",
      },
    ],
  };

  const goobergrad = {
    title: "sillygrad",
    description:
      "A small tensor library written in C++ and accelerated with CUDA.",
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

  const hypatia = {
    title: "hypatia.ai",
    description:
      "An AI powered note taking and flashcard generation app. Winner at HackTX23.",
    links: [
      {
        sourceLink: "https://hypatia-zeta.vercel.app/",
        linkTitle: "website",
      },
      {
        sourceLink: "https://devpost.com/software/everest-ca8b9z",
        linkTitle: "submission",
      },
    ],
  };

  return [
    {
      posts: [img2math, coverizer, goobergrad],
      sectionTitle: "deep learning",
    },
    {
      posts: [hypatia, food_glitch, rustslam],
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
