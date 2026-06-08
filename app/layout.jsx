import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
});

export const metadata = {
  title: "Zoe App 🧋",
  description: "La routine di Zoe",
  manifest: "/manifest.json",
  themeColor: "#A8DFC4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
