// import { gql, useQuery } from '@apollo/client';
// import { gql } from 'graphql-request';
import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
// styles
import styles from './Card.module.sass';

const Card = () => {
	const [commercialsList, setCommercialsList] = useState(['commercial']);

	const loadingAnimation = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="32"
			width="32"
			viewBox="0 0 32 32">
			<g fill="#ebebeb">
				<path
					transform="rotate(0,16,16) translate(1.6,1.6) scale(0.9,0.9)"
					d="M10.657013,28.944977C12.35199,29.644989,14.149017,30,16,30L16.015015,32 16,32C13.88501,32,11.830994,31.593994,9.8940125,30.794006z M25.903992,25.894989L27.319,27.307983C25.824005,28.804993,24.080017,29.972992,22.13501,30.781006L21.368011,28.934998C23.069,28.227997,24.595001,27.204987,25.903992,25.894989z M3.0700073,21.380981C3.7789917,23.082001,4.8040161,24.606995,6.1149902,25.914978L4.7030029,27.330994C3.2059937,25.837982,2.0350037,24.095001,1.223999,22.151001z M32,15.938995L32,16C32,18.118988,31.591003,20.177979,30.787018,22.121002L28.938995,21.35498C29.643005,19.656982,30,17.85498,30,16z M1.2000122,9.9100037L3.0490112,10.67099C2.3529968,12.362,2,14.153992,2,16L0,16.031006 0,16C0,13.891998,0.40301514,11.842987,1.2000122,9.9100037z M27.27301,4.6459961C28.77301,6.1359863,29.946991,7.8769836,30.761017,9.8179932L28.916992,10.59198C28.20401,8.8930054,27.177002,7.3699951,25.863007,6.0650024z M9.8340149,1.2309875L10.605011,3.0769958C8.9049988,3.7869873,7.381012,4.8129883,6.0750122,6.1259766L4.6570129,4.7149963C6.1490173,3.2160034,7.8909912,2.0440063,9.8340149,1.2309875z M15.953003,0L16,0C18.10199,0,20.145996,0.40197754,22.075012,1.1940002L21.315002,3.0440063C19.627991,2.3509827,17.839996,2,16,2z">
					<animateTransform
						attributeName="transform"
						attributeType="XML"
						type="rotate"
						from="0, 16, 16"
						to="360, 16, 16"
						dur="1.5s"
						repeatCount="indefinite"
					/>
				</path>
			</g>
		</svg>
	);

	/* ------------------------------ FETCH PHOTOS ------------------------------ */

	const commercialsQuery = gql`
		query {
			commercials {
				commercialName
				commercialUrl
				commercialPhoto {
					url
					width
					height
				}
			}
		}
	`;

	const { loading, error, data } = useQuery(commercialsQuery);

	useEffect(() => {
		setCommercialsList(data?.commercials);
	}, [data]);

	/* --------------------------------- RENDER --------------------------------- */

	const renderCommercials = () => {
		return commercialsList?.map((commercial, index) => {
			console.log(commercial?.commercialUrl);
			return (
				<div
					onClick={() =>
						window.open(commercial?.commercialUrl, '_blank')
					}
					key={'commercial' + index}
					className={styles.commercial}
					style={{
						backgroundImage: `url(${commercial?.commercialPhoto?.url})`,
					}}>
					{loading ? (
						<span className={styles.loading}>
							{loadingAnimation}
						</span>
					) : null}
					<h2 className={styles.commercialName}>
						{commercial?.commercialName}
					</h2>
				</div>
			);
		});
	};

	return <div className={styles.commercials}>{renderCommercials()}</div>;
};

export default Card;
