// import DrawerApp from "./components/navbar";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0, height: "100%" }}>
      <body style={{ margin: 0, padding: 0, height: "100%" }}>
        {/* <DrawerApp /> */}
        
        <main>{children}</main>
      </body>
    </html>
  );
}
