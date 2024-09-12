import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import { ReactQueryProvider } from './ReactQueryProvider/ReactQueryProvider';
import { SearchProvider } from './context/SearchContext';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Starship Explorer',
  description: 'Explore starships and their details',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <SearchProvider>
            <Navbar />
            {children}
          </SearchProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
