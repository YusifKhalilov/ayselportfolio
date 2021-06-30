/* --------------------------------- IMPORTS -------------------------------- */

// packages
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import client from '../apollo-client';
// components
import Contact from '../app/components/common/Contact/Contact';
import Menu from '../app/components/common/Menu/Menu';
import GalleryCategories from '../app/components/modules/Gallery/GalleryCategories';
import GalleryMini from '../app/components/modules/Gallery/GalleryMini';
// context
import { GalleryContextProvider } from '../context/AppContext';

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
