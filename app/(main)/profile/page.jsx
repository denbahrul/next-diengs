import BackToPreviewsPage from "@/app/ui/main/bact-to-previews";
import ProfileMenu from "@/app/ui/main/profile/profile-menu";
import ProfilePict from "@/app/ui/main/profile/profile-pict";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { auth } from "@/auth";
import UserNotLogedIn from "@/app/ui/main/user-not-loged-in";

export default async function Page() {
  const session = await auth();

  return (
    <>
      <nav className="m-6 flex flex-row justify-between">
        <div className="flex">
          <BackToPreviewsPage />
          <h2 className="my-auto font-bold">Profile</h2>
        </div>
        <div className="flex text-abu2">
          <HiOutlineDotsCircleHorizontal size={24} className="my-auto" />
        </div>
      </nav>
      {!session ? (
        <UserNotLogedIn />
      ) : (
        <section className="">
          <ProfilePict />
          <ProfileMenu />
        </section>
      )}
      {/* <section className="">
        <ProfilePict />
        <ProfileMenu />
      </section> */}
    </>
  );
}
