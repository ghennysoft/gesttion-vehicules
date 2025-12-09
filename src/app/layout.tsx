import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Logiciel de gestion",
  description: "Gestion des vehicules, chauffeurs et toutes les dépenses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
