import BackToPreviewsPage from "@/app/ui/main/bact-to-previews";

export default function Page() {
  const price = 479.5;
  const refund = price - price * 0.2;
  const rounded = refund.toFixed(1);

  return (
    <>
      <nav className="m-6 flex flex-row justify-between">
        <div className="flex">
          <BackToPreviewsPage />
          <h2 className="my-auto font-bold">Cancel Booking</h2>
        </div>
      </nav>
      <section className="mx-6">
        <p>
          Please Select a payment refund methode (Only 80% will be refunded)
        </p>
        <div className="fixed bottom-0 z-10 w-full max-w-[420px] bg-putih">
          <p className="p-4 text-center font-light text-abu2">
            Paid: <s>${price}</s> &ensp;
            <span className="font-bold text-hitam">Refund: ${rounded}</span>
          </p>
          <button className="mb-9 w-full rounded-3xl bg-hijau p-4 text-center text-sm font-medium text-hijau2 shadow-xl shadow-hijau2">
            Continue
          </button>
        </div>
      </section>
    </>
  );
}
