import BackToPreviewsPage from "@/app/ui/main/bact-to-previews";
export default function Favorite() {
  return (
    <>
      <header className="m-6 flex flex-row justify-between">
        <div className="flex">
          <BackToPreviewsPage />
          <h2 className="my-auto font-bold">My Orders</h2>
        </div>
        <div className="flex text-abu2"></div>
      </header>
      <section></section>
    </>
  );
}
