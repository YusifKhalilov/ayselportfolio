/* --------------------------------- IMPORTS -------------------------------- */

// packages
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import random from 'random';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
// components
import Menu from './components/common/Menu/Menu';
import GalleryMini from './components/modules/Gallery/GalleryMini';
// styles
import styles from './gallery.module.sass';

/* -------------------------------- COMPONENT ------------------------------- */

function gallery() {
	// states
	const [displayPhoto, setDisplayPhoto] = useState(false);
	const [photoURL, setPhotoURL] = useState('');
	const [photoList, setPhotoList] = useState([]);
	// variables
	const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;
	const databaseURL = process.env.NEXT_PUBLIC_DATABASE_URL;
	// Apollo client
	const client = new ApolloClient({
		ssrMode: typeof window === 'undefined',
		uri: databaseURL,
		fetchOptions: {
			mode: 'no-cors',
		},
		cache: new InMemoryCache(),
	});

	/* ------------------------------ FETCH PHOTOS ------------------------------ */

	const fetchPhoto = async (url) => {
		// graphql query for getting photos
		const result_ = await client.query({
			query: gql`
				query getPhotos {
					photos {
						id
						photo {
							formats
						}
					}
				}
			`,
		});

		return result_;
	};

	const { data, error } = useSWR(databaseURL, fetchPhoto);

	/* ----------------------------- ON DATA UPDATE ----------------------------- */

	useEffect(() => {
		setPhotoList(data?.data?.photos[0]?.photo || []);
	}, [data]);

	/* ----------------------- DISPLAY IMAGE ON LOAD IMAGE ---------------------- */

	const onLoadImage = () => {
		setDisplayPhoto(!displayPhoto);
	};

	/* ---------------------------- RANDOM IMAGE URL ---------------------------- */

	const randomImageSelector = (index) => {
		const randomIndex = index || random.int(0, photoList?.length - 1 || 0);
		setDisplayPhoto(false);
		setTimeout(() => {
			setPhotoURL(photoList[randomIndex]?.formats?.large?.url || '');
		}, 1000);
	};

	/* -------------------------- ON PHOTO LIST UPDATE -------------------------- */

	useEffect(() => {
		let timeoutRandomImageSelector = null;

		if (photoList.length > 0) {
			randomImageSelector();
			timeoutRandomImageSelector = setInterval(randomImageSelector, 5000);
		}

		return () => {
			clearInterval(timeoutRandomImageSelector);
		};
	}, [photoList]);

	/* --------------------------------- RENDER --------------------------------- */
	const displayCSS = {
		visibility: 'visible',
		opacity: 1,
	};

	const hideCSS = {
		visibility: 'hidden',
		opacity: 0,
	};

	return (
		<div style={{ backgroundColor: 'black' }}>
			<Menu />
			<img
				style={displayPhoto ? displayCSS : hideCSS}
				onLoad={onLoadImage}
				className={styles.mainImage}
				src={serverURL + photoURL || ''}
				alt="gallery image"
			/>
			<GalleryMini />
		</div>
	);
}

export default gallery;
