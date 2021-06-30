/* --------------------------------- IMPORTS -------------------------------- */

// packages
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import client from '../apollo-client';
// context
import { GalleryContextProvider } from '../context/AppContext';
// components
import Contact from './components/common/Contact/Contact';
import Menu from './components/common/Menu/Menu';
import GalleryCategories from './components/modules/Gallery/GalleryCategories';
import GalleryMini from './components/modules/Gallery/GalleryMini';

/* -------------------------------- COMPONENT ------------------------------- */

function gallery({ categoriesList }) {
	return (
		<GalleryContextProvider>
			<ApolloProvider client={client}>
				<div style={{ backgroundColor: 'black' }}>
					<Menu />
					<GalleryCategories />
					<GalleryMini />
					<Contact />
				</div>
			</ApolloProvider>
		</GalleryContextProvider>
	);
}

export default gallery;
