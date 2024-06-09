import BottomNavbar from "@/app/ui/main/bottom-navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <section className="top-0 m-auto h-screen max-w-[420px] bg-background">
          {children}
          <BottomNavbar />
        </section>
      </body>
    </html>
  );
}
