import { Be_Vietnam_Pro } from "next/font/google";
import "./ui/globals.css";

const vietnam = Be_Vietnam_Pro({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Diengs.id",
  description: "Cari penginapan di Dieng, nggak perlu ribet!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={vietnam.className}>{children}</body>
    </html>
  );
}
