import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthWatcher from "./components/AuthWatcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dude with a Car (dot com)",
  description: "I'm a dude with a car, what can I do for you?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthWatcher />
        {children}
      </body>
    </html>
  );
}
