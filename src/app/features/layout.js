
export const metadata = {
  title: "Our Features",
  description: "we provide quality",
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
