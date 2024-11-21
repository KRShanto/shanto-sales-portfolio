import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroHighlight } from "@/components/ui/bg-highlight";
import Navbar from "@/components/navbar";
import SideNavbar from "@/components/side-navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <HeroHighlight>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="">
              <Navbar />
              <SideNavbar />
              <main>{children}</main>
            </div>
          </ThemeProvider>
        </HeroHighlight>
      </body>
    </html>
  );
}
