import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./provider";
import Nav from "./Component/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kicks",
  description: "made by Harsh sukhija",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <AuthProvider> {children}</AuthProvider>
      </body>
    </html>
  );
}
