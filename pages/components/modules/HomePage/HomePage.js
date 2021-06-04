/* -------------------------------- PACKAGES -------------------------------- */
import Head from 'next/head';
import React, { useState } from 'react';
/* --------------------------------- STYLES --------------------------------- */
import styles from './HomePage.module.sass';

function HomePage({ photos }) {
	// const [photoUrl, setPhotoUrl] = useState('');
	const [displayPhoto, setDisplayPhoto] = useState('');
	// declaration variables
	let style = {};
	// const databaseURL = process.env.NEXT_PUBLIC_DATABASE_URL;
	const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;

	/* --------------------------------- RENDER --------------------------------- */

	const imageLoaded = () => {
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
	style = { ...(displayPhoto ? displayCSS : hideCSS) };

	return (
		<div className={styles.homePage}>
			<Head>
				<title>Aysel's Portfolio</title>
				<meta name="description" content="Aysel portfolio home page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<img
				style={style}
				onLoad={imageLoaded}
				className={styles.mainImage}
				src={
					serverURL + '/uploads/large_main_Photo_min_94786d656e.jpeg'
				}
				alt="main page background image"
			/>
			<h1 className={styles.h1}>Aysel</h1>
		</div>
	);
}

export default HomePage;
