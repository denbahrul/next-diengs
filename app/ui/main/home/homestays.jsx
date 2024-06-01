import HomeStayCard from "../homestay-card";


async function getData() {
  const res = await fetch('http://localhost:8000/v1/homestays')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Homestays() {
  const homestays = await getData();
  console.log(homestays);
  return(
    <>
      <section className="mt-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-3 md:grid-cols-2 lg:mb-0 lg:grid-cols-2">
        {homestays.data.map((homestay) => (
        <HomeStayCard 
          key={homestay.id}
          name={homestay.name}
          location={homestay.location}
          rating={homestay.rating}
          price={350000}
          discount={10}
        />
        ))}
        </div>
      </section>

</>
  )

}