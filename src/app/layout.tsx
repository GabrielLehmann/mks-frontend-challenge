import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import React from "react";
import "./global.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "600", "400", "300"],
});

export const metadata: Metadata = {
  title: "Loja MSK",
  description: "Created by Lehmann",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
