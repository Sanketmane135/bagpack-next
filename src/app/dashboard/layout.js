
export const metadata = {
  title: "My Dashboard",
  description: "Check my history",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
