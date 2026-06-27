import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

//components
import Navbar from "./components/Navbar";
export const metadata = {
  title: "Dojo Helpdesk",
  description: "Helpdesk application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}

