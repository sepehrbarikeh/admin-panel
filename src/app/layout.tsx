'use client'

import "./globals.css";
import Sidebar from "@/components/sideBarLayout";
import Nav from "@/components/nav";
import useTabStore from "@/store/tabName";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const { tabName } = useTabStore();

  return (
    <html lang="fa">
      <head>
          <title>{tabName}</title>
        </head>
      <body>
        <div className="min-h-screen flex dark:bg-slate-800 bg-white">
          <Sidebar />
          <main className="bg-gray-200 dark:bg-slate-800 flex-1">
            <Nav />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
