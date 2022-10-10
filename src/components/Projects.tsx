const portfolio = "/@astroimage/assets/portfolio.png";
const projects = [
  {
    title: "Portfolio Site",
    image: "/portfolio.png",
    website: "https://portfolio-ctk5.vercel.app/",
    github: "https://github.com/thalasith/portfolio",
    description:
      "After hearing Astro.js went live with v1, I was eager to take advantage of this new framework as its Island Architecture appealed to me and I understood how much faster load times could be by minimizing the javascript on some pages. A majority of the components are Astro.js but I also have a few React components that handle some features of the site. I also used Vercel to host the website.",
    technologies: ["Astro.js", "React", "Vercel", "Typescript"],
  },
  {
    title: "Decentrahoops",
    image: "/decentrahoops.gif",
    website: "https://near-sportsmarketplace.vercel.app/",
    github: "https://github.com/thalasith/near-sportsmarketplace",
    description:
      "I wanted to build an end-to-end blockchain project to truly understand how blockchain technology works, its viability as a long-term solution, and how to connect what we have in web2 to web3. Specifically, I've always had an interest in the NBA and as well, they provide a free open-source API through data.nba.net which makes this possible to host for free to demo.",
    technologies: ["NEAR Protocol", "React.js", "Vercel", "Typescript"],
  },
];

interface Project {
  title: string;
  image: string;
  website: string;
  github: string;
  description: string;
  technologies: string[];
}

//TO DO: Fix up project interface
const ProjectCard = ({
  title,
  image,
  website,
  github,
  description,
  technologies,
}: any) => {
  return (
    <div class="my-5 mr-2 flex flex-col rounded border border-gray-600 p-1 pl-5">
      <p class="mb-2 flex flex-row justify-between text-2xl font-bold text-gray-600 lg:text-4xl">
        {title}
        <div class="flex flex-row">
          <a
            target="_blank"
            href={website}
            class="mx-2 rounded-lg hover:bg-gray-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-link-45deg"
              viewBox="0 0 16 16"
            >
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
            </svg>
          </a>
          <a
            target="_blank"
            href={github}
            class="mx-2 rounded-lg hover:bg-gray-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </p>

      <div class="flex flex-col items-center bg-white lg:flex-row">
        <img src={image} class="h-64 w-96" alt="Portfolio Website" />
        <div class="ml-2 flex flex-col pt-2 lg:pt-0">
          <p class="text-lg font-bold text-gray-600 lg:text-2xl">Tech Stack</p>
          <p>{technologies.join(" / ")}</p>
          <p class="text-lg font-bold text-gray-600 lg:text-2xl">Description</p>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div class="flex flex-col">
      {projects.map((project) => {
        return (
          <ProjectCard
            title={project.title}
            image={project.image}
            website={project.website}
            github={project.github}
            description={project.description}
            technologies={project.technologies}
          />
        );
      })}
    </div>
  );
}
