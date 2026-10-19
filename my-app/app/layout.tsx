import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const fontana = localFont({
  src: [
    { path: "./fonts/Fontana.otf", weight: "400", style: "normal" },
    { path: "./fonts/Fontana Italic.otf", weight: "400", style: "italic" },
    { path: "./fonts/Fontana Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/Fontana Bold Italic.otf", weight: "700", style: "italic" },
  ],
  variable: "--font-fontana",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robotics and Drone Club | University of Redlands",
  description:
    "The Robotics and Drone Club is an organization with a diverse member body committed to sharing the wonder of robotics and drones with everyone.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fontana.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}