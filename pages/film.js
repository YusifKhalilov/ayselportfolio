import { ApolloProvider } from '@apollo/client';
import React from 'react';
import client from '../apollo-client';
// components
import Menu from '../app/components/common/Menu/Menu';
import FilmList from '../app/components/modules/Film/FilmList';
// styles
import styles from './film.module.sass';

function film() {
	return (
		<ApolloProvider client={client}>
			<div className={styles.film}>
				<Menu />
				<FilmList />
			</div>
		</ApolloProvider>
	);
}

export default film;
