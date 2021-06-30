import React from 'react';

function YouTubePlayer({ videoId }) {
	return (
		<div>
			<iframe
				width="650"
				height="400"
				src={`https://www.youtube.com/embed/${videoId}` || ''}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen></iframe>
		</div>
	);
}

export default YouTubePlayer;
