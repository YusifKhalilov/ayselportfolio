import PropTypes from 'prop-types';
import React, { useState } from 'react';

const AppContext = React.createContext();

function AppMainProvider({ children }) {
	// Context state
	const [isGalleryActive, setIsGalleryActive] = useState(false);
	const databaseURL = process.env.NEXT_PUBLIC_DATABASE_URL;

	// Provide Context to children components
	return (
		<AppContext.Provider
			value={{
				isGalleryActive,
				setIsGalleryActive,
			}}>
			{children}
		</AppContext.Provider>
	);
}

AppMainProvider.propTypes = {
	children: PropTypes.any,
};

export default AppContext;

export { AppMainProvider };
