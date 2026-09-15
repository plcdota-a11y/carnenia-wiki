import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MenuNavegacao from "@/components/MenuNavegacao"; // <--- ADICIONE ESTA LINHA

// ... (configuração das fontes) ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <MenuNavegacao /> {/* <--- ADICIONE ESTA LINHA AQUI */}
        {children}
      </body>
    </html>
  );
}