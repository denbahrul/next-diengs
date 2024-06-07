import BottomNavbar from "../ui/main/home/bottom-navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <main className="m-auto h-screen max-w-[420px] bg-background">
          {children}
          <BottomNavbar />
        </main>
      </body>
    </html>
  );
}
