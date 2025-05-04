import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Social App',
  description: 'A social platform with admin and user panels',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
