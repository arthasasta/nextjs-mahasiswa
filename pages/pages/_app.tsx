import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Vonique64';
    src: url('/path/to/vonique64.ttf'); /* Ganti dengan path menuju file font Vonique64 */
    /* Tambahkan gaya lainnya jika diperlukan */
  }

  /* Tambahkan gaya lainnya jika diperlukan */
`;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
