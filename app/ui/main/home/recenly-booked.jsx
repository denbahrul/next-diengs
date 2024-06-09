import RoomCard from "@/app/ui/main/room-card-list";
// async function getData() {
//   const res = await fetch("http://localhost:8000/v1/homestays");
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default async function RecenlyBooked() {
  // const homestays = await getData();
  return (
    <>
      <section className="mx-6 my-4">
        <div className="flex flex-row justify-between">
          <p className="font-semibold">Recenly Booked</p>
          <p className="text-hijau">See all</p>
        </div>
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <div className="h-10 w-full"></div>
      </section>
    </>
  );
}
