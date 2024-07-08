import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../styles/global.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr Jarbas",
  description: "Dr Jarbas geração de documentos e formulários",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="min-h-full" lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
