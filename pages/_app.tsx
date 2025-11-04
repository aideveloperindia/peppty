import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CustomCursor from '@/components/CustomCursor';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsTransitioning(true);
    };
    const handleRouteChangeComplete = () => {
      setTimeout(() => setIsTransitioning(false), 600);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <>
      <CustomCursor />
      {isTransitioning && (
        <div className="page-transition exit" aria-hidden="true" />
      )}
      <Component {...pageProps} />
    </>
  );
}


