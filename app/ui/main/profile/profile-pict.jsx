import { HiOutlineUser } from "react-icons/hi";
import { auth } from "@/auth";

export default async function ProfilePict() {
  const session = await auth();

  if (!session) {
    console.log("no user loged in");
    return null;
  } else {
    console.log(session);
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="m-auto flex aspect-square w-1/4 items-center justify-center rounded-full bg-abu2">
          <img src={session.user.image} className="w-full rounded-full" />
          {/* <HiOutlineUser size={34} /> */}
        </div>
        <p className="mt-3 font-bold">{session.user.name}</p>
        <p className="text-xs font-light">{session.user.email}</p>
      </div>
    </>
  );
}
