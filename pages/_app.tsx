import { UserProvider } from '@/context/UserContext';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { FavoritesProvider } from '@/context/FavoriteContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <FavoritesProvider>
        <Component {...pageProps} />
      </FavoritesProvider>
    </UserProvider>
  );
}

export default MyApp;