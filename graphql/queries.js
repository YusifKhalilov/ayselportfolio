import { gql } from '@apollo/client';

const GET_ALL_PHOTOS = gql`
	query ExampleQuery {
		photos {
			_id
			photo {
				url
			}
			order
			name
		}
	}
`;

export { GET_ALL_PHOTOS };
