import { AppMainProvider } from '../context/AppContext';
import '../styles/global.sass';

function MyApp({ Component, pageProps }) {
	return (
		<AppMainProvider>
			<Component {...pageProps} />
		</AppMainProvider>
	);
}

export default MyApp;
