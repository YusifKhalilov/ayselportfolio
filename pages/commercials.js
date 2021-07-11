import { ApolloProvider } from '@apollo/client';
import React from 'react';
import client from '../apollo-client';
import Card from '../app/components/common/Card/Card';
import Menu from '../app/components/common/Menu/Menu';
// styles
import styles from './commercials.module.sass';

function commercials() {
	return (
		<div>
			<ApolloProvider client={client}>
				<Menu />
				<div className={styles.commercialsContainer}>
					<Card />
				</div>
			</ApolloProvider>
		</div>
	);
}

export default commercials;
