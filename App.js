import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppNavigator from './navigator/AppNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/ldcl3ayg0mhx',
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer 93f3808c25c1f5bdb95476ca8576c6eaa12b5587efb956efb242ceead7cb3840`,
  },
  cache: new InMemoryCache({
    addTypename: true,
    resultCaching: true,
    assumeImmutableResults: true,
  }),
});

const App = () => (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </ApolloProvider>
);

export default App;