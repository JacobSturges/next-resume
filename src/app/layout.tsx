import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Jacob Sturges",
  description: "A web resume",
};

library.add(fab);
library.add(fas);

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
