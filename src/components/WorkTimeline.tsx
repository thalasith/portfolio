import { useState } from "preact/hooks";
import work from "../assets/work.json";
// const promotion = "/@astroimage/assets/promotion.gif";

export default function WorkTimeline() {
  const [active, setActive] = useState("2022");
  const [item, setItem] = useState(work.find((item) => item.year === active));

  const handleItemChange = (year: string) => {
    setActive(year);
    setItem(work.find((item) => item.year === year));
  };

  return (
    <div class="mr-2 w-full rounded border border-gray-400 lg:h-96 lg:w-2/3">
      <div class=" flex w-full items-center px-5 py-5">
        <div class="flex-grow border border-gray-400" />
        <YearButton
          year="2014"
          active={active}
          handleItemChange={handleItemChange}
        />

        <div class="flex-grow border border-gray-400" />
        <YearButton
          year="2015"
          active={active}
          handleItemChange={handleItemChange}
        />

        <div class="flex-grow border border-gray-400" />
        <YearButton
          year="2018"
          active={active}
          handleItemChange={handleItemChange}
        />

        <div class="flex-grow border border-gray-400" />
        <YearButton
          year="2020"
          active={active}
          handleItemChange={handleItemChange}
        />

        <div class="flex-grow border border-gray-400" />
        <YearButton
          year="2021"
          active={active}
          handleItemChange={handleItemChange}
        />

        <div class="flex-grow border border-gray-400" />
        <YearButton
          year="2022"
          active={active}
          handleItemChange={handleItemChange}
        />
      </div>

      <div class="flex flex-col items-center py-5 px-2 text-gray-600 lg:flex-row ">
        <div class="lg:w-1/3">
          <img
            src={item?.image}
            class="h-48 w-96 object-scale-down"
            alt="loading..."
          />
        </div>
        <div class="ml-4 flex flex-col pt-8 lg:w-2/3 lg:pt-0">
          <div>
            <p class="text-sm lg:text-sm">{item?.year}</p>
          </div>
          <h2 class="text-2xl font-extrabold">{item?.title}</h2>

          <div class="text-sm lg:text-base">{item?.description}</div>
        </div>
      </div>
    </div>
  );
}

const YearButton = ({ year, handleItemChange, active }: any) => {
  return (
    <button
      class={`${
        active === year ? "bg-slate-600 text-gray-200" : "text-gray-600"
      } mx-0.5 flex-shrink rounded-full border-2 border-gray-200 p-2 text-xs  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-md lg:mx-4 lg:font-semibold`}
      onClick={() => {
        handleItemChange(year);
      }}
    >
      {year}
    </button>
  );
};
