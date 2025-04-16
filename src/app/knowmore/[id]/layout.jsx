
export const metadata = {
  title: "Packge Details",
  description: "Happy booking",
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
