import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import ReactGrabIntegration from '@/components/ReactGrabIntegration';

export const metadata: Metadata = {
  title: 'Panama Golden Key - Residency & Investment for Chinese Investors',
  description: 'Expert guidance for Chinese investors seeking Panama residency through the Qualified Investor Visa program. Real estate, medical tourism, and investment opportunities.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
      <body>
        <ReactGrabIntegration />
        {children}
      </body>
    </html>
  );
}