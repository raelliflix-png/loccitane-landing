import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'Occitane by Israelli Barros",
  description: "Beleza inspirada pela natureza – sua consultora L'Occitane de confiança",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
