export const metadata = {
  title: 'Azure SWA Test',
  description: 'Minimal test app for Azure Static Web Apps',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
