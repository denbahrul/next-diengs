export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <main className="bg-background m-auto h-svh max-w-[420px]">
          {children}
        </main>
      </body>
    </html>
  );
}
