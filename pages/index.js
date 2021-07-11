/* --------------------------------- IMPORTS -------------------------------- */
// components
import { ApolloProvider } from '@apollo/client';
import { useEffect } from 'react';
import client from '../apollo-client';
import Menu from '../app/components/common/Menu/Menu';
import HomePage from '../app/components/modules/HomePage/HomePage';

const databaseURL = process.env.NEXT_PUBLIC_DATABASE_URL;
// const client = new ApolloClient({
// 	uri: databaseURL,
// 	cache: new InMemoryCache(),
// });

/* ----------------------------- HOME COMPONENT ----------------------------- */
export default function Home({ dataList }) {
	useEffect(() => {
		console.log(dataList);
	}, [dataList]);

	return (
		<ApolloProvider client={client}>
			<Menu />
			<HomePage />
		</ApolloProvider>
	);
}
