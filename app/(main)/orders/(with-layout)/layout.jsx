import Link from "next/link";
import BackToPreviewsPage from "@/app/ui/main/bact-to-previews";
import OrdersNavbar from "@/app/ui/main/Orders/orders-navbar";
import { auth } from "@/auth";
import UserNotLogedIn from "@/app/ui/main/user-not-loged-in";
import clsx from "clsx";

export default async function OrdersLayout({ children }) {
  const session = await auth();

  return (
    <>
      <div className="m-6">
        <div className="flex">
          <BackToPreviewsPage />
          <h2 className="my-auto font-bold">My Orders</h2>
        </div>
        <nav className="mb-2 mt-4 flex justify-between"></nav>
        {!session ? (
          <UserNotLogedIn />
        ) : (
          <>
            <OrdersNavbar />
            <section className="mt-4">{children}</section>
          </>
        )}
      </div>
    </>
  );
}
