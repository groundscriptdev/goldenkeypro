import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import ReactGrabIntegration from '@/components/ReactGrabIntegration';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://panamagoldenkey.com'),
  title: 'Panama Golden Key - Residency & Investment for Chinese Investors',
  description: 'Expert guidance for Chinese investors seeking Panama residency through Qualified Investor Visa program. Real estate, medical tourism, and investment opportunities.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* React Grab for element selection in development */}
        {process.env.NODE_ENV === "development" && (
          <Script
            src="https://unpkg.com/react-grab@0.0.18/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="afterInteractive"
            data-enabled="true"
          />
        )}
      </head>
      <body suppressHydrationWarning>
        <ReactGrabIntegration />
        {children}
      </body>
    </html>
  );
}