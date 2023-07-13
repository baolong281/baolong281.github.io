import { type NextPage } from "next";

export interface link {
  sourceLink: string;
  linkTitle: string;
}

export interface BlockProps {
  sections: BlockSection[];
  blockTitle: string;
}

export interface BlockSection {
  sectionTitle: string;
  posts: Post[];
}

export interface Post {
  title: string;
  description: string;
  links: link[];
}

const Block: NextPage<BlockProps> = ({ sections, blockTitle }) => {
  return (
    <>
      <div className="flex flex-col justify-center gap-6 align-middle">
        <div className="flex justify-center align-middle font-lato text-3xl font-bold md:text-4xl">
          {blockTitle}
        </div>
        {sections.map((section, index) => {
          return (
            <div
              key={index}
              className="font-figree flex flex-col justify-center gap-4 align-middle font-semibold"
            >
              <div className="font-base flex justify-center align-middle font-figtree text-base md:text-3xl">
                <div className="w-[55%] break-all ">
                  {"* * * " + section.sectionTitle + " *".repeat(80)}
                </div>
              </div>
              {section.posts.map((post, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-center align-middle"
                  >
                    <div className="flex justify-center align-middle">
                      <div className="md: w-[55%] font-martian text-2xl underline">
                        {post.title}
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center align-middle text-xl">
                      <div className="md: w-[55%] font-figtree font-normal">
                        {post.description}
                      </div>
                    </div>
                    <div className="ml-20 mt-2 flex justify-start gap-3 align-top font-figtree text-lg font-normal md:ml-72">
                      {post.links.map((link, index) => {
                        return (
                          <div key={index} className="flex ">
                            {`[${index}] `}
                            <a
                              href={link.sourceLink}
                              className="italic text-blue-700"
                            >
                              {link.linkTitle}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Block;
