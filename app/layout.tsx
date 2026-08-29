import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist"
});

export const metadata: Metadata = {
  title: "Muhammad Hezka | Software Engineer & AI Engineer",
  description:
    "Personal portfolio of Muhammad Hezka, a Software Engineer, AI Engineer, and Content Creator building thoughtful digital products.",
  metadataBase: new URL("https://hezka.dev"),
  openGraph: {
    title: "Muhammad Hezka | Software Engineer & AI Engineer",
    description:
      "Software, AI automation, and digital experiences crafted with detail.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geist.variable} bg-background font-sans text-foreground antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
