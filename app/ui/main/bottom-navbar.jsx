import { BsHouseExclamation } from "react-icons/bs";
export default function BottomNavbar() {
  return (
    <>
      <div className="fixed bottom-0 flex w-full max-w-[420px] justify-between bg-background p-4 px-6">
        <p>Home</p>
        <p>Search</p>
        <p>Booking</p>
        <p>profile</p>
      </div>
    </>
  );
}
