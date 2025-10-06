import "./globals.css";

export const metadata = {
  title: "L'Occitane by Israelli Barros",
  description: "Descubra o universo de L'Occitane – beleza, natureza e bem-estar em cada detalhe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
