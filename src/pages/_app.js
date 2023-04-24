import '../styles/globals.css';
import Theme from '../styles/Theme';
import '../styles/scss/app.scss';

function MyApp({ Component, pageProps = {} }) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
