import { AppProps } from "next/app";
import { StyledThemeProvider } from "@definitions/styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Hydrate } from "@tanstack/react-query";
import { appWithTranslation } from "@i18n";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <StyledThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </StyledThemeProvider>
  );
}

export default MyApp;
