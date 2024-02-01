import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <nav>
      <ul style={{ display: 'flex', gap: '20px', }}>
        <li style={{ backgroundColor: '#5b12f9' }}>
          <Link href={'/'}>Homepage</Link>
        </li>
        <li style={{ backgroundColor: '#5b12f9' }}>
          <Link href={'/pokedex'}>Pokedex</Link>
        </li>
      </ul>
    </nav>
    <Component {...pageProps} />
  </>;
}
