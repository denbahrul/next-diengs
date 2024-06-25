import BackToPreviewsPage from "@/app/ui/main/bact-to-previews";
export default function Page() {
  return (
    <>
      <nav className="m-6 flex flex-row justify-between">
        <div className="flex">
          <BackToPreviewsPage />
          <h2 className="my-auto font-bold">Edit Profile</h2>
        </div>
      </nav>
      <section className="mx-6"></section>
    </>
  );
}
