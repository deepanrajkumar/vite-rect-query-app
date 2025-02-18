import PropTypes from "prop-types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const QueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
QueryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QueryProvider;
