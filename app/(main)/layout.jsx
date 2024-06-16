import BottomNavbar from "../ui/main/bottom-navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-background">
        <section className="top-0 m-auto max-w-[420px]">
          {children}
          <BottomNavbar />
        </section>
      </body>
    </html>
  );
}
