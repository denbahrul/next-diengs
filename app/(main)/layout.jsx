import { Be_Vietnam_Pro } from "next/font/google";
import BottomNavbar from "../ui/main/bottom-navbar";

const vietnam = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body body className={vietnam.className}>
        <section className="top-0 m-auto max-w-[420px]">
          {children}
          <div className="h-14 w-full"></div>
          <BottomNavbar />
        </section>
      </body>
    </html>
  );
}
