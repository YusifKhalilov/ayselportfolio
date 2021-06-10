import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

function AppMainProvider({ children }) {
	// Context state
	const [selectedMenu, setSelectedMenu] = useState('home');
	const [isContactFormActive, setIsContactFormActive] = useState(true);

	// Provide Context to children components
	return (
		<AppContext.Provider
			value={{
				selectedMenu,
				setSelectedMenu,
				isContactFormActive,
				setIsContactFormActive,
			}}>
			{children}
		</AppContext.Provider>
	);
}

AppMainProvider.propTypes = {
	children: PropTypes.any,
};

export default function useAppContext() {
	return useContext(AppContext);
}

export { AppMainProvider };
