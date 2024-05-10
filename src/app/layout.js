import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./provider";
import Provider from "../app/redux/Provider";
import Nav from "./Component/Nav";
import Nav2 from "./Component/Nav2";
import Footer from "./Component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kicks",
  description: "made by team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <Nav2 />
        <AuthProvider>
          <Provider>{children}</Provider>
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
