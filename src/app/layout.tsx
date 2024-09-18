import "./globals.scss";

export const metadata = {
  title: "Inicial",
  icons: {
    icon: "/favicon_48px.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
