const picture = "/@astroimage/assets/portfolio.png";
export default function ProjectCard() {
  return (
    <div class="border border-gray-600 p-1 flex flex-col my-5">
      <p class="text-4xl text-gray-600 font-bold flex flex-row">
        Portfolio Website
        <a href="">
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
      </p>

      <div class="flex flex-row m-2">
        <img src={picture} width={350} alt="Portfolio Website" />
        <div class="flex flex-col ml-2">
          <p class="text-2xl text-gray-600 font-bold">Tech Stack</p>
          <p>Astro.js / React / Tailwind / Vercel</p>
          <p class="text-2xl text-gray-600 font-bold">Description</p>
          <div>
            <span>
              After hearing Astro.js went live with v1, I was eager to take
              advantage of this new framework as its "Island Architecture"
              appealed to me and I understood how much faster load times could
              be by minimizing the javascript on some pages. A majority of the
              components are Astro.js but I also have a few React components
              that handle some features of the site. I also used Vercel to host
              the website.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
