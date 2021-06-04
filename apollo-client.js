import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({ uri: 'https://countries.trevorblades.com' });

const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});

export default client;
