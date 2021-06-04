/* --------------------------------- IMPORTS -------------------------------- */
// context
import { AppMainProvider } from './AppContext';
// components
import Menu from './components/common/Menu/Menu';
import HomePage from './components/modules/HomePage/HomePage';

/* ----------------------------- HOME COMPONENT ----------------------------- */
export default function Home() {
	return (
		<AppMainProvider>
			<Menu />
			<HomePage />
		</AppMainProvider>
	);
}
