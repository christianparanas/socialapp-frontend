import './globals.css';
import { Providers } from './providers';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

export const metadata = {
  title: 'Social App',
  description: 'A social platform with admin and user panels',
};

// PrimeReact configuration (optional)
const value = {
  ripple: true,              // enables ripple effect
  inputStyle: 'outlined',    // default input style
  zIndex: {
    modal: 1100,            // dialog, sidebar
    overlay: 1000,          // dropdown, overlaypanel
    menu: 1000,             // overlay menus
    tooltip: 1100           // tooltip
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PrimeReactProvider value={value}>
          <Providers>
            {children}
          </Providers>
        </PrimeReactProvider>
      </body>
    </html>
  );
}