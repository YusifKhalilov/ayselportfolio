import Head from 'next/head';
import React, { useCallback, useEffect, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import useSWR from 'swr';
// styles
import styles from './GalleryMini.module.sass';

function GalleryMini() {
	// states
	const [thumbData, setThumbData] = useState([]);
	const [largeImageURLData, setLargeImageURLData] = useState([]);
	const [displayPhoto, setDisplayPhoto] = useState([]);
	const [large, setLarge] = useState({ size: 'thumbnail', index: undefined });
	const [currentImage, setCurrentImage] = useState(0);
	const [isViewerOpen, setIsViewerOpen] = useState(false);
	// assets
	const databaseURL = process.env.NEXT_PUBLIC_DATABASE_URL;
	const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;

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

	/* --------------------------- DISPLAY THUMBNAILS --------------------------- */

	const displayThumb = (index_) => {
		setDisplayPhoto((prevState) => {
			let oldState = [...prevState];
			index_ ? (oldState[index_] = true) : null;

			return oldState;
		});
	};

	/* ------------------------- ON DISPLAY PHOTO UPDATE ------------------------ */

	useEffect(() => {
		if (thumbData && !thumbData.length) {
			setLarge('large');
		}
	}, [displayPhoto]);

	/* ------------------------ OPEN & CLOSE IMAGE VIEWER ----------------------- */

	const openImageViewer = useCallback((index) => {
		setCurrentImage(index);
		setIsViewerOpen(true);
	}, []);

	const closeImageViewer = () => {
		setCurrentImage(0);
		setIsViewerOpen(false);
	};

	/* --------------------------- MINI PHOTOS RENDER --------------------------- */

	const renderMiniPhotos = (photoList) => {
		return photoList?.map((photo, index) => {
			// variables
			let style = {};
			let size = 'thumbnail';
			const displayCSS = {
				visibility: 'visible',
				opacity: 1,
			};
			const hideCSS = {
				visibility: 'hidden',
				opacity: 0,
			};

			style = { ...(displayPhoto[index] ? displayCSS : hideCSS) };

			if (displayPhoto && !displayPhoto.length) {
				setDisplayPhoto((prevState) => {
					let oldState = displayPhoto;
					oldState.push(false);

					return oldState;
				});
			}

			if (index === large.index) {
				size = index === large.index ? large.size : 'thumbnail';
				style = { ...style, ...activeImage };
			}

			return (
				<div
					onClick={() => openImageViewer(index)}
					className={styles.thumbs}
					key={'miniGallery' + index}>
					<img
						className={styles.galleryThumb}
						onLoad={() => displayThumb(index)}
						// style={style}
						src={photo?.formats?.[size]?.url || ''}
					/>
				</div>
			);
		});
	};

	/* --------------------- ON DATA UPDATE SET THUMBS DATA --------------------- */

	useEffect(() => {
		if (data?.data?.photos[0]?.photo) {
			setThumbData(data?.data?.photos[0]?.photo);
		}
	}, [data]);

	/* ------------------ ON THUMBS UPDATE SET LARGE IMAGE URLS ----------------- */

	useEffect(() => {
		const largeImageURLs = thumbData?.map((image, url) => {
			return image?.formats?.large?.url || '';
		});
		setLargeImageURLData(largeImageURLs);
	}, [thumbData]);

	/* --------------------------------- RENDER --------------------------------- */

	return (
		<div className={styles.galleryMiniMain}>
			<Head>
				<title>Image Gallery</title>
				<meta name="description" content="Aysel portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.header}>- FULL ALBUM -</div>
			<div>{renderMiniPhotos(thumbData)}</div>
			{isViewerOpen && (
				<ImageViewer
					src={largeImageURLData || []}
					currentIndex={currentImage}
					onClose={closeImageViewer}
				/>
			)}
		</div>
	);
}

export default GalleryMini;
