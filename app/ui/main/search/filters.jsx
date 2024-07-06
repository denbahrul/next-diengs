import { text } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";

const radioItems = [
  {
    text: "Kawah Sikidang",
    value: "kawah-sikidang",
  },
  {
    text: "Candi Arjuna",
    value: "candi-arjuna",
  },
  {
    text: "Bukit Sikunir",
    value: "bukit-sikunir",
  },
  {
    text: "Kawah Sikidang",
    value: "kawah-sikidang",
  },
];

export default function Filters({ isOpen, closeModalHandler }) {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-10 bg-hitam bg-opacity-70 transition-opacity duration-300",
        {
          "pointer-events-none opacity-0": !isOpen,
          "opacity-100": isOpen,
        },
      )}
    >
      <div
        className={clsx(
          "fixed bottom-0 left-1/2 w-full max-w-[420px] -translate-x-1/2 transform rounded-t-3xl bg-putih p-6 transition-transform duration-300",
          {
            "translate-y-full": !isOpen,
            "translate-y-0": isOpen,
          },
        )}
      >
        <p className="mb-4 text-center text-lg font-extrabold">Filters</p>
        <form>
          <p className="font-bold">Nearby</p>
          <div className="no-scrollbar my-4 flex overflow-x-scroll">
            {radioItems.map((radioItem) => {
              const radioItemText = radioItem.text;
              const radioItemValue = radioItem.value;
              return (
                <label key={radioItem.value} className="flex items-center">
                  <input
                    type="radio"
                    name="option"
                    value={radioItemValue}
                    className="peer hidden"
                  />
                  <span className="mr-2 whitespace-pre rounded-full border-2 border-hijau px-4 py-2 text-sm text-hijau transition-all duration-300 hover:bg-hijau hover:text-putih peer-checked:bg-hijau peer-checked:text-putih">
                    {radioItemText}
                  </span>
                </label>
              );
            })}
          </div>
          <p className="font-bold">Price Range</p>
          <input
            type="range"
            name="price-range"
            id="price-range"
            min={50}
            max={500}
            className="my-4 w-full border-hijau"
          />
          <p className="font-bold">Facilities</p>
          <div className="my-4">
            <input type="checkbox" name="wifi" id="wifi" className="" />
            <label htmlFor="wifi" className="mr-2">
              {" "}
              Wifi
            </label>
            <input
              type="checkbox"
              name="hot-shower"
              id="hot-shower"
              className=""
            />
            <label htmlFor="wifi"> Hot Shower</label>
          </div>
          <div className="flex justify-between">
            <button
              type="reset"
              className="mr-2 w-1/2 rounded-3xl bg-hijau2 p-4 text-sm font-medium text-hijau"
            >
              Reset
            </button>
            <button
              onClick={closeModalHandler}
              className="ml-2 w-1/2 rounded-3xl bg-hijau p-4 text-sm font-medium text-hijau2 shadow-lg shadow-hijau2"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
