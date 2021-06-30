import Head from 'next/head';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import useSWR from 'swr';
// context
import useGalleryContext from '../../../../context/AppContext';
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
	const { setGalleryName, galleryName, setGalleryImages, galleryImages } =
		useGalleryContext();

	// assets
	const databaseURL = process.env.NEXT_PUBLIC_DATABASE_URL;
	const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;
	const closeIcon = (
		<svg width="30px" height="30px">
			<g>
				<path
					xmlns="http://www.w3.org/2000/svg"
					style={{ fill: '#f34848' }}
					d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25   C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0   L13,15.313L9.533,18.78c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467   L7.221,9.534c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468   c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467   C19.033,16.725,19.033,17.138,18.78,17.394z"
				/>
			</g>
		</svg>
	);

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
			let ratio = photo.height / photo.width;
			let widthOfImage = 100 / ratio;
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
					<Image
						className={styles.galleryThumb}
						onLoad={() => displayThumb(index)}
						width={widthOfImage}
						height={100}
						// layout="fill"
						src={photo?.url || ''}
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
		const largeImageURLs = galleryImages?.map((image, index) => {
			return image.url || '';
		});
		setLargeImageURLData(largeImageURLs);
	}, [galleryImages]);

	/* ----------------------------- RESET CATEGORY ----------------------------- */

	const resetCategory = () => {
		setGalleryName('');
		setGalleryImages([]);
	};

	/* --------------------------------- RENDER --------------------------------- */

	return (
		<div
			style={
				galleryName !== ''
					? {
							maxHeight: 'calc( 100vh -  80px)',
					  }
					: {}
			}
			className={styles.galleryMiniMain}>
			<Head>
				<title>Image Gallery</title>
				<meta name="description" content="Aysel portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.header}>
				- {galleryName !== '' ? galleryName : 'SELECT ALBUM'} -
				{galleryName !== '' ? (
					<span onClick={resetCategory} className={styles.closeIcon}>
						{closeIcon}
					</span>
				) : null}
			</div>
			<div>{renderMiniPhotos(galleryImages)}</div>
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
