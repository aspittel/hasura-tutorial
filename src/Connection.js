import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";

const wsLink = new WebSocketLink({
  uri: "wss://pixart-together.herokuapp.com/v1/graphql",
  options: {
    reconnect: true
  }
});

const httpLink = new HttpLink({
  uri: "http://pixart-together.herokuapp.com/v1/graphql/"
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export default new ApolloClient({
  cache: new InMemoryCache(),
  link
});
