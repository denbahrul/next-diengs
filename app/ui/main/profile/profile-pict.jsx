import { HiOutlineUser } from "react-icons/hi";

export default function ProfilePict() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="m-auto flex aspect-square w-1/4 items-center justify-center rounded-full bg-abu2">
          <HiOutlineUser size={34} />
        </div>
        <p className="mt-3 font-bold">Daniel Austin</p>
        <p className="text-xs font-light">daniel_austin@yourdomain.com</p>
      </div>
    </>
  );
}
