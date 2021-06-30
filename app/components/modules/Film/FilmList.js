import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import YouTubePlayer from '../../common/YouTubePlayer/YouTubePlayer';
// styles
import styles from './FilmList.module.sass';

function FilmList() {
	// const [videoId, setVideoId] = useState('');
	const [videoList, setVideoList] = useState([]);

	const videoIdExtractor = (url) => {
		console.log(
			`🚀 ~ file: FilmList.js ~ line 12 ~ videoIdExtractor ~ url`,
			url,
		);
		let video_id = url?.split('v=')[1] || '';
		const ampersandPosition = video_id?.indexOf('&');
		if (ampersandPosition != -1) {
			video_id = video_id.substring(0, ampersandPosition);
		}
		console.log(
			`🚀 ~ file: FilmList.js ~ line 19 ~ videoIdExtractor ~ video_id`,
			video_id,
		);
		return video_id;
	};

	/* ------------------------------- FETCH DATA ------------------------------- */

	const videosQuery = gql`
		query {
			films {
				name
				youTubeVideoLink
			}
		}
	`;

	const { loading, error, data } = useQuery(videosQuery);

	useEffect(() => {
		setVideoList(data?.films);
	}, [data]);

	const renderVideoList = () => {
		return videoList?.map((video, index) => {
			console.log('link', video.youTubeVideoLink);
			const url = videoIdExtractor(video.youTubeVideoLink);
			return (
				<div key={'film' + index}>
					<YouTubePlayer videoId={url || ''} />;
				</div>
			);
		});
	};

	return <div className={styles.films}>{renderVideoList()}</div>;
}

export default FilmList;
