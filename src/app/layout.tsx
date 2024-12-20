import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroHighlight } from "@/components/ui/bg-highlight";
import Navbar from "@/components/navbar";
import SideNavbar from "@/components/side-navbar";
import SocialNavbar from "@/components/social-navbar";
import ChatSupport from "@/components/chat-support";
import { Toaster } from "@/components/ui/toaster";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";

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
              <ResponsiveNavbar />
              <SideNavbar />
              <SocialNavbar />
              <ChatSupport />
              <main>{children}</main>
              <Toaster />
            </div>
          </ThemeProvider>
        </HeroHighlight>
      </body>
    </html>
  );
}
