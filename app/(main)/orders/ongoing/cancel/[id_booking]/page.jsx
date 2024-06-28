import BackToPreviewsPage from "@/app/ui/main/bact-to-previews";

export default function Page() {
  return (
    <>
      <nav className="m-6 flex flex-row justify-between">
        <div className="flex">
          <BackToPreviewsPage />
          <h2 className="my-auto font-bold">Cancel Booking</h2>
        </div>
      </nav>
      <section className="">
        <p>
          Please Select a payment refund methode (Only 80% will be refunded)
        </p>
        <p className="mt-10 text-center text-merah">LAH ERROR BJIR, set lah</p>
      </section>
    </>
  );
}
