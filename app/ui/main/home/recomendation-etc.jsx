import BigCard from "./big-card";
import { getHomestays } from "@/app/api/data/homestay";

export default async function RecomendationEtc() {
  const homestays = await getHomestays();

  return (
    <>
      <div class="mb-4 ml-5 flex flex-col">
        <div class="no-scrollbar flex overflow-x-scroll">
          <div class="flex flex-nowrap">
            <button className="m-1 whitespace-pre rounded-full border-2 border-hijau px-4 py-1 text-sm text-hijau hover:bg-hijau hover:text-putih">
              Recomended
            </button>
            <button className="m-1 whitespace-pre rounded-full border-2 border-hijau px-4 py-1 text-sm text-hijau hover:bg-hijau hover:text-putih">
              Popular
            </button>
            <button className="m-1 whitespace-pre rounded-full border-2 border-hijau px-4 py-1 text-sm text-hijau hover:bg-hijau hover:text-putih">
              Trending
            </button>
            <button className="m-1 whitespace-pre rounded-full border-2 border-hijau px-4 py-1 text-sm text-hijau hover:bg-hijau hover:text-putih">
              Favorites
            </button>
            <button className="m-1 mr-5 whitespace-pre rounded-full border-2 border-hijau px-4 py-1 text-sm text-hijau hover:bg-hijau hover:text-putih">
              Best Sellers
            </button>
          </div>
        </div>
      </div>
      <div class="ml-3 flex flex-col">
        <div class="no-scrollbar flex overflow-x-scroll">
          <div class="flex flex-nowrap">
            {homestays.data.map((homestay) => (
              <BigCard
                key={homestay.id}
                name={homestay.name}
                image={homestay.main_image}
                location={homestay.location}
                price={homestay.price}
                rating={homestay.rating}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <Navbar /> */}
    </>
  );
}
