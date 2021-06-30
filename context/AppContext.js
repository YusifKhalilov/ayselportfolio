import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';

const GalleryContext = React.createContext();

function GalleryContextProvider({ children }) {
	// Context state
	const [galleryName, setGalleryName] = useState('');
	const [galleryImages, setGalleryImages] = useState([]);

	// Provide Context to children components
	return (
		<GalleryContext.Provider
			value={{
				galleryName,
				setGalleryName,
				galleryImages,
				setGalleryImages,
			}}>
			{children}
		</GalleryContext.Provider>
	);
}

GalleryContextProvider.propTypes = {
	children: PropTypes.any,
};

export default function useGalleryContext() {
	return useContext(GalleryContext);
}

export { GalleryContextProvider };
