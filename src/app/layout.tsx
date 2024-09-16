import "./globals.scss";

export const metadata = {
  title: "Inicial",
  icons: {
    icon: '/favicon_48px.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

