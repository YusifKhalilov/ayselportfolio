/* --------------------------------- IMPORTS -------------------------------- */
// components
import { ApolloProvider } from '@apollo/client';
import { useEffect } from 'react';
import client from '../apollo-client';
import Menu from '../app/components/common/Menu/Menu';
import BioContent from '../app/components/modules/Bio/BioContent';

const databaseURL = process.env.NEXT_PUBLIC_DATABASE_URL;
// const client = new ApolloClient({
// 	uri: databaseURL,
// 	cache: new InMemoryCache(),
// });

/* ----------------------------- HOME COMPONENT ----------------------------- */
export default function bio({ dataList }) {
	useEffect(() => {
		console.log(dataList);
	}, [dataList]);

	return (
		<ApolloProvider client={client}>
			<Menu />
			<BioContent />
		</ApolloProvider>
	);
}
