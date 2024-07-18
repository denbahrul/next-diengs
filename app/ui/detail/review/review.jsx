import { HiStar } from "react-icons/hi";

export default function Review() {
  const rating = 3;

  // const colorRating = [];
  // // eslint-disable-next-line no-plusplus
  // for (let i = 0; i < 5; i++) {
  //   if (i < rating) {
  //     colorRating[i] = "#FFC700";
  //   } else {
  //     colorRating[i] = "#A1ADC0";
  //   }
  // }

  return (
    <div className="py-4 px-4 mb-2 bg-putih rounded-2xl shadow-2xl shadow-background">
      <div className="mb-2 flex">
        <div className="mr-3 h-10 w-10 rounded-full bg-[url('https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover" />
        <div className="grow py-1">
          <p className="text-sm font-semibold">Ahmad Rifai</p>
          <p className="text-xs text-abu2">20 Jan 2023</p>
        </div>
          <div className="bg-hijau flex my-3 px-2 py-1 rounded-full">
            <HiStar size={16} color="#fff" />
            <p className="text-putih ml-1 text-xs">{rating}</p>
          </div>
      </div>
      <p className="text-sm font-normal">
        Lorem ipsum dolor sit amet consectetur. Ac quis donec ut nisi iaculis donec aliquam
        ullamcorper feugiat. Nulla ullamcorper libero blandit nunc in ut.{" "}
      </p>
      {/* <div className="mt-3 flex gap-2">
        <div className="h-14 w-14 rounded-lg bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] bg-cover" />
        <div className="h-14 w-14 rounded-lg bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] bg-cover" />
      </div> */}
    </div>
  );
}
