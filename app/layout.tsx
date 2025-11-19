import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ClipFactory AI - Dashboard",
  description: "Manage your video projects and content creation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          <div className="flex-1">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
