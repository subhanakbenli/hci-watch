import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Watch Emulator",
  description: "A mock smart watch interface emulator for headphone controls.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
