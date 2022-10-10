import { useState } from "preact/hooks";
import work from "../assets/work.json";

export default function WorkTimeline() {
  const [active, setActive] = useState("2022");
  const [isShowing, setIsShowing] = useState(false);
  const [item, setItem] = useState(work.find((item) => item.year === active));

  const handleItemChange = (year: string) => {
    setActive(year);
    setItem(work.find((item) => item.year === year));
  };

  return (
    <div class="mr-2 w-full rounded border border-gray-400 lg:h-96">
      <div class=" flex w-full items-center px-5 py-5">
        <div class="flex-grow border border-gray-400" />
        <YearButton year="2014" handleItemChange={handleItemChange} />

        <div class="flex-grow border border-gray-400" />
        <YearButton year="2015" handleItemChange={handleItemChange} />

        <div class="flex-grow border border-gray-400" />
        <YearButton year="2018" handleItemChange={handleItemChange} />

        <div class="flex-grow border border-gray-400" />
        <YearButton year="2020" handleItemChange={handleItemChange} />

        <div class="flex-grow border border-gray-400" />
        <YearButton year="2021" handleItemChange={handleItemChange} />

        <div class="flex-grow border border-gray-400" />
        <YearButton year="2022" handleItemChange={handleItemChange} />
      </div>

      <div class="flex flex-row py-5 px-2 text-gray-600 ">
        <div class=" w-1/3">
          <img
            src={item?.image}
            class="object-scale-down lg:h-48 lg:w-96"
            alt="loading..."
          />
        </div>
        <div class="ml-4 flex w-2/3 flex-col">
          <div>
            <p class="text-xs lg:text-sm">{item?.year}</p>
          </div>
          <h2 class="text-md font-extrabold lg:text-xl">{item?.title}</h2>

          <div class="text-sm lg:text-lg">{item?.description}</div>
        </div>
      </div>
    </div>
  );
}

const YearButton = ({ year, handleItemChange }: any) => {
  return (
    <button
      class="mx-0.5 flex-shrink rounded-full border-2 border-gray-200 p-2 text-xs text-gray-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-md lg:mx-4 lg:font-semibold"
      onClick={() => {
        handleItemChange(year);
      }}
    >
      {year}
    </button>
  );
};
