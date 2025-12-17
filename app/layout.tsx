import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import SupabaseProvider from "@/lib/supabase/SupabaseProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mello",
  description: "A modern task management platform inspired by Trello. Organize your projects with intuitive drag-and-drop boards, collaborate with your team, and boost productivity with our powerful Kanban-style workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SupabaseProvider>{children}</SupabaseProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
