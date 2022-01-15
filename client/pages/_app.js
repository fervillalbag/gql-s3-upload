import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import "../styles/globals.css";

const client = new ApolloClient({
  link: createUploadLink({
    uri: "http://localhost:4000",
  }),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
