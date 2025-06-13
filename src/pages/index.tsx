import { Geist, Geist_Mono } from "next/font/google";
import Table from "../components/Table";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className}`}>
      <main>
        <Table />
      </main>
    </div>
  );
}
