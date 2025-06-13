import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
