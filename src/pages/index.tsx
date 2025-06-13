import { Geist, Geist_Mono } from "next/font/google";
import mockData from "../data/mock_data.json";

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
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  Registered Date
                </th>
              </tr>
            </thead>
            <tbody>
              {mockData.data.map((row) => (
                <tr key={row.id} className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {row.id}
                  </th>
                  <td className="px-6 py-4">{row.firstName}</td>
                  <td className="px-6 py-4">{row.lastName}</td>
                  <td className="px-6 py-4">{row.email}</td>
                  <td className="px-6 py-4">{row.city}</td>
                  <td className="px-6 py-4">{row.registeredDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
