import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { PromisedContextProvider } from "./PromisedContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PromisedContextProvider
      value={(async () => {
        return headers().get("user-agent");
      })()}
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </PromisedContextProvider>
  );
}
