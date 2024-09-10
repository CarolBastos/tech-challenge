import "./globals.scss";
import Header from "./components/header/header";
import styles from "./layout.module.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com" />
      </head>
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
