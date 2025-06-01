import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunitoFont = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoFont.variable} antialiased`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Online Store | Main page",
  description: "Super store online for you",
};
