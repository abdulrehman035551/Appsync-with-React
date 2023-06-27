import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://a6udhrzdbvgqpoa5opdo4o6zdm.appsync-api.us-east-1.amazonaws.com/graphql',
});

const authLink = setContext((_, { headers }) => {

  const apiKey = 'da2-c2w2u4ob2vfo3feupwrw6qdrj4';
  return {
    headers: {
      ...headers,
      'x-api-key': apiKey,
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
