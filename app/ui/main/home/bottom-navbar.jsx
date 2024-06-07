import { BsHouseExclamation } from "react-icons/bs";
export default function BottomNavbar() {
  return (
    <>
      <div className="sticky bottom-0 m-4 flex w-full justify-between p-4 backdrop-blur-lg">
        <p>Home</p>
        <p>Search</p>
        <p>Booking</p>
        <p>profile</p>
      </div>
    </>
  );
}
