/* -------------------------------- PACKAGES -------------------------------- */
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
/* --------------------------------- STYLES --------------------------------- */
import styles from './HomePage.module.sass';

function HomePage({ photos }) {
	// const [photoUrl, setPhotoUrl] = useState('');
	const [displayPhoto, setDisplayPhoto] = useState(false);
	// declaration variables
	const [style, setStyle] = useState({
		visibility: 'hidden',
		opacity: 0,
	});
	// const databaseURL = process.env.NEXT_PUBLIC_DATABASE_URL;
	const mainPhotoURL = process.env.NEXT_PUBLIC_MAIN_PHOTO_URL;
	const image = useRef(null);

	/* --------------------------------- RENDER --------------------------------- */

	const imageLoaded = () => {
		console.log('uploaded');
		setDisplayPhoto(true);
	};

	const displayCSS = {
		visibility: 'visible',
		opacity: 1,
	};

	const hideCSS = {
		visibility: 'hidden',
		opacity: 0,
	};

	// set style for displaying animation
	useEffect(() => {
		if (displayPhoto) {
			setStyle(displayCSS);
		} else {
			setStyle(hideCSS);
		}
	}, [displayPhoto]);

	useEffect(() => {
		const photo = image.current;
		if (typeof window !== 'undefined' && photo && photo.complete) {
			console.log('image already loaded');
			setDisplayPhoto(true);
			setStyle(displayCSS);
		}
	}, []);

	return (
		<div className={styles.homePage}>
			<Head>
				<title>Aysel's Portfolio</title>
				<meta name="description" content="Aysel portfolio home page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<img
				ref={image}
				className={styles.mainImage}
				src={mainPhotoURL}
				alt="main page background image"
			/>
			<h1 className={styles.h1}>Aysel</h1>
		</div>
	);
}

export default HomePage;
