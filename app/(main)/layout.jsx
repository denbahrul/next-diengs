import BottomNavbar from "../ui/main/bottom-navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <section className="top-0 m-auto max-w-[420px]">
          {children}
          <div className="h-14 w-full"></div>
          <BottomNavbar />
        </section>
      </body>
    </html>
  );
}
