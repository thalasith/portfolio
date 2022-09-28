import { useState } from "preact/hooks";

const work = [
  {
    year: "2014",
    title: "Moved to Hong Kong for my first job",
    description:
      "Unhappy with the jobs in Vancouver, I moved to HK. I learnt how to talk to clients and how to work in a team.",
    image:
      "https://media4.giphy.com/media/fniVO5yA3ddAq6A19V/giphy.gif?cid=ecf05e4772vej00wywtifhsibkzewwlvl9ljo5w145vxqv99&rid=giphy.gif&ct=g",
  },
  {
    year: "2015",
    title: "Moved to San Francisco for my second job",
    description:
      "I moved to Mercer's San Francisco division. Within my first few months, I was assigned to data visualization projects on HR data.",
    image:
      "https://media1.giphy.com/media/BCs20EzQnYRXi/giphy.gif?cid=ecf05e47mbpbtt4afq0vwxjls73kya108k028hu2xrzwhhua&rid=giphy.gif&ct=g",
  },
  {
    year: "2018",
    title: "Completed Springboard's Data Science Bootcamp",
    description:
      "I completed Springboard's Data Science Bootcamp. I learnt how to use Python and SQL to analyze data and build machine learning models to learn how to be more efficient with coding at my current role.",
    image:
      "https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/3350/s1200/springboard-data-science-career-track-curriculum-spotlight.png",
  },
  {
    year: "2020",
    title: "Moved to Vancouver due to COVID-19",
    description:
      "I moved back to Vancouver due to COVID-19 and to be closer to my family.",
    image:
      "http://res.cloudinary.com/simpleview/image/upload/v1589990523/clients/vancouverbc/Vancouver_Aerial_2017_1__72115131-4a31-42dc-b369-7a5ccec8273f.jpg",
  },
  {
    year: "2021",
    title:
      "Completed my qualification to become an Associate of the Society of Actuaries",
    description:
      "I completed my qualification to become an Associate of the Society of Actuaries. I learnt how to use R to analyze data and build machine learning models to learn how to be more efficient with coding at my current role.",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f4/SoALogo.png",
  },
  {
    year: "2022",
    title: "Promoted to Principal Consultant",
    description:
      "Completed a major milestone in my career at Mercer - becoming a Principal.",
    image:
      "https://media2.giphy.com/media/Z6E5EzRex9S4hAlsUt/giphy.gif?cid=ecf05e47g4lru0kz09txcchjll5r6z74cm5tgn8ppfnwmx1t&rid=giphy.gif&ct=g",
  },
];

export default function WorkTimeline() {
  const [active, setActive] = useState("2022");
  const [item, setItem] = useState(work.find((item) => item.year === active));

  const handleItemChange = (year: string) => {
    console.log(year);
    setActive(year);
    setItem(work.find((item) => item.year === year));
  };

  return (
    <div class="border p-1 border-gray-400 h-96">
      <div class="relative flex py-5 px-5 items-center">
        <div class="flex-grow border border-gray-400" />
        <button
          class="flex-shrink mx-4 text-gray-600 font-semibold border-2 border-gray-200 rounded-full p-2 transition ease-in-out delay-150 hover:shadow-md hover:-translate-y-1 hover:scale-105 duration-300"
          onClick={() => {
            handleItemChange("2014");
          }}
        >
          2014
        </button>
        <div class="flex-grow border border-gray-400" />
        <button
          class=" flex-shrink mx-4 text-gray-600 font-semibold border-2 border-gray-200 rounded-full p-2 transition ease-in-out delay-150 hover:shadow-md hover:-translate-y-1 hover:scale-105 duration-300"
          onClick={() => {
            handleItemChange("2015");
          }}
        >
          2015
        </button>
        <div class="flex-grow border border-gray-400" />
        <button
          class=" flex-shrink mx-4 text-gray-600 font-semibold border-2 border-gray-200 rounded-full p-2 transition ease-in-out delay-150 hover:shadow-md hover:-translate-y-1 hover:scale-105 duration-300"
          onClick={() => {
            handleItemChange("2018");
          }}
        >
          2018
        </button>
        <div class="flex-grow border border-gray-400" />
        <button
          class=" flex-shrink mx-4 text-gray-600 font-semibold border-2 border-gray-200 rounded-full p-2 transition ease-in-out delay-150 hover:shadow-md hover:-translate-y-1 hover:scale-105 duration-300"
          onClick={() => {
            handleItemChange("2020");
          }}
        >
          2020
        </button>
        <div class="flex-grow border border-gray-400" />
        <button
          class=" flex-shrink mx-4 text-gray-600 font-semibold border-2 border-gray-200 rounded-full p-2 transition ease-in-out delay-150 hover:shadow-md hover:-translate-y-1 hover:scale-105 duration-300"
          onClick={() => {
            handleItemChange("2021");
          }}
        >
          2021
        </button>
        <div class="flex-grow border border-gray-400 " />
        <button
          class=" flex-shrink mx-4 text-gray-600 font-semibold border-2 border-gray-200 rounded-full p-2 transition ease-in-out delay-150 hover:shadow-md hover:-translate-y-1 hover:scale-105 duration-300"
          onClick={() => {
            handleItemChange("2022");
          }}
        >
          2022
        </button>
      </div>

      <div class="relative flex flex-row py-5 px-5 text-gray-600">
        <div class="w-256 h-72">
          <img
            src={item?.image}
            class="object-scale-down h-48 w-96"
            alt="loading..."
          />
        </div>
        <div class="flex flex-col ml-4">
          <div>
            <p class="text-sm">{item?.year}</p>
          </div>
          <h2 class="text-xl font-extrabold">{item?.title}</h2>

          <div class="text-lg">{item?.description}</div>
        </div>
      </div>
    </div>
  );
}
