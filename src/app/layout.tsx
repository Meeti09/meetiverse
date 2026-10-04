import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meeti Doshi — Builder, Community & Tech",
  description:
    "Personal portfolio of Meeti Doshi, a Computer Engineering student exploring technology, AI, products, finance and developer communities.",
  openGraph: {
    title: "Meeti Doshi — Builder, Community & Tech",
    description:
      "Personal portfolio of Meeti Doshi, a Computer Engineering student exploring technology, AI, products, finance and developer communities.",
    type: "website",
    locale: "en_US",
    siteName: "Meeti Doshi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meeti Doshi — Builder, Community & Tech",
    description:
      "Personal portfolio of Meeti Doshi, a Computer Engineering student exploring technology, AI, products, finance and developer communities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
