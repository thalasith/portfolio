import { useState } from "preact/hooks";

const work = [
  {
    year: "2014",
    title: "Moved to Hong Kong for my first job",
    description:
      "Unhappy with the jobs in Vancouver, I moved to HK. I learnt how to talk to clients and how to work in a team.",
  },
  {
    year: "2015",
    title: "Moved to San Francisco for my second job",
    description:
      "I moved to Mercer's San Francisco division. Within my first few months, I was assigned to data visualization projects on HR data.",
  },
  {
    year: "2018",
    title: "Completed Springboard's Data Science Bootcamp",
    description:
      "I completed Springboard's Data Science Bootcamp. I learnt how to use Python and SQL to analyze data and build machine learning models to learn how to be more efficient with coding at my current role.",
  },
  {
    year: "2020",
    title: "Moved to Vancouver due to COVID-19",
    description:
      "I moved back to Vancouver due to COVID-19 and to be closer to my family.",
  },
  {
    year: "2021",
    title:
      "Completed my qualification to become an Associate of the Society of Actuaries",
    description:
      "I completed my qualification to become an Associate of the Society of Actuaries. I learnt how to use R to analyze data and build machine learning models to learn how to be more efficient with coding at my current role.",
  },
  {
    year: "2022",
    title: "Promoted to Principal Consultant",
    description:
      "Completed a major milestone in my career at Mercer - becoming a Principal.",
  },
];

export default function WorkTimeline() {
  const [active, setActive] = useState("2022");

  return (
    <div class="border p-1 border-gray-400">
      <div class="relative flex py-5 px-5 items-center">
        <div class="flex-grow border-t border-gray-400" />
        <span class="flex-shrink mx-4 text-gray-400">2014</span>
        <div class="flex-grow border-t border-gray-400" />
        <span class="flex-shrink mx-4 text-gray-400">2015</span>
        <div class="flex-grow border-t border-gray-400" />
        <span class="flex-shrink mx-4 text-gray-400">2018</span>
        <div class="flex-grow border-t border-gray-400" />
        <span class="flex-shrink mx-4 text-gray-400">2020</span>
        <div class="flex-grow border-t border-gray-400" />
        <span class="flex-shrink mx-4 text-gray-400">2021</span>
        <div class="flex-grow border-t border-gray-400" />
        <span class="flex-shrink mx-4 text-gray-400">2022</span>
      </div>
      <div class="relative flex py-5 px-5 items-center">Hi</div>
    </div>
  );
}
