import '../styles/mapa-sp-style.css';

/**
 * Custom App component that wraps all pages.
 * Global CSS must be imported here per Next.js requirements.
 */
function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
