
import "./globals.css";




export const metadata = {
  title: "Aprender Next",
  description: "Vamos a estar aprendiendo a usar next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
