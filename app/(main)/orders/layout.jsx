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
        <section className="mt-4">{children}</section>
      </div>
    </>
  );
}
