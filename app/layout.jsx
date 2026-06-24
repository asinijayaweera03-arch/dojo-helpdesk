import "./globals.css";

export const metadata = {
  title: "Dojo Helpdesk",
  description: "Helpdesk application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

