import { ApolloClient, InMemoryCache } from '@apollo/client';

const databaseURL = process.env.NEXT_PUBLIC_DATABASE_URL;

const client = new ApolloClient({
	uri: databaseURL,
	fetchOptions: {
		mode: 'no-cors',
	},
	cache: new InMemoryCache(),
});

export default client;
