import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IRTADIHI (ارتديه) — Autumn / Winter Atelier 2026",
  description:
    "Irtadihi — Arabic for 'Wear It' — is a luxury minimalist clothing atelier. Our debut Hoodies & Sweatshirts Capsule embodies silence in form, warmth in thread.",
  keywords: [
    "luxury atelier",
    "minimalist fashion",
    "hoodies",
    "sweatshirts",
    "Arabic fashion",
    "Irtadihi",
    "ارتديه",
    "sustainable luxury",
  ],
  openGraph: {
    title: "IRTADIHI — Luxury Minimalist Atelier",
    description: "Silence in Form, Warmth in Thread. Autumn / Winter 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('irtadihi-theme') || 'light';
                  document.documentElement.setAttribute('data-theme', t);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
