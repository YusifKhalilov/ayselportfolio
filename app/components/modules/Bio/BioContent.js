import { gql, useQuery } from '@apollo/client';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import styles from './BioContent.module.sass';

function BioContent() {
	const [bio, setBio] = useState(null);
	/* ----------------------------- FETCH BIO INFO ----------------------------- */
	const bioQuery = gql`
		query {
			bios {
				bio {
					html
				}
			}
		}
	`;

	const { loading, error, data } = useQuery(bioQuery);

	useEffect(() => {
		setBio(data?.bios[0].bio.html);
	}, [data]);

	return <div className={styles.content}>{parse(bio || '')}</div>;
}

export default BioContent;
