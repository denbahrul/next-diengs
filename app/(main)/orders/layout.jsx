import Link from "next/link";
import BackToPreviewsPage from "@/app/ui/main/bact-to-previews";
import OrdersNavbar from "@/app/ui/main/Orders/orders-navbar";
export default function OrdersLayout({ children }) {
  return (
    <>
      <div className="m-6">
        <div className="flex">
          <BackToPreviewsPage />
          <h2 className="my-auto font-bold">My Orders</h2>
        </div>
        <nav className="mt-4 flex justify-between">
          <OrdersNavbar />
        </nav>

        {/* <nav className="mt-4 bg-abu2">
          <ul className="flex justify-between">
            <li>
              <Link href="/orders">All</Link>
            </li>
            <li>
              <Link href="/orders/pending">Pending</Link>
            </li>
            <li>
              <Link href="/orders/completed">Completed</Link>
            </li>
            <li>
              <Link href="/orders/canceled">Canceled</Link>
            </li>
          </ul>
        </nav> */}
        <section className="mt-4">{children}</section>
      </div>
    </>
  );
}
