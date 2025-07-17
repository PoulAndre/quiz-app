import { Geist, Geist_Mono, Luxurious_Roman, Tektur } from "next/font/google"; // Importer de nye fontene
import "./globals.css";

// Definer de andre fontene
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Definer Luxurious Roman-fonten
const luxuriousRoman = Luxurious_Roman({
  variable: "--font-luxurious-roman",
  subsets: ["latin"],
  weight: ["400"],
});

// Definer Tektur-fonten med ønskede vekter
const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Definer hvilke vekter du trenger
});

export const metadata = {
  title: "Quiz",
  description: "Laget av Poul André",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${luxuriousRoman.variable} ${tektur.variable} antialiased`} // Legg til Luxurious Roman og Tektur her
      >
        {children}
      </body>
    </html>
  );
}
