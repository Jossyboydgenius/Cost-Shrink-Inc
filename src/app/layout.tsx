import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cost Shrink Inc - Shrink cost, grow profit",
  description: "We provide small businesses and sole proprietors with practical financial solutions that reduce expenses and strengthen profitability. Expert bookkeeping, tax filing, consulting, and cost management services.",
  keywords: "bookkeeping, tax filing, tax consulting, cost management, small business, financial consulting, chartered accountant",
  authors: [{ name: "Cost Shrink Inc" }],
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  openGraph: {
    title: "Cost Shrink Inc - Shrink cost, grow profit",
    description: "Expert financial solutions for small businesses. Reduce expenses, strengthen profitability.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
