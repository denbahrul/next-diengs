import BottomNavbarLinks from "./bottom-navbar-link";

export default function BottomNavbar() {
  return (
    <>
      <div className="fixed bottom-0 flex w-full max-w-[420px] justify-between bg-putih px-12 py-4">
        <BottomNavbarLinks />
      </div>
    </>
  );
}
