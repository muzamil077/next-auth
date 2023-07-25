import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/layout";
import { createContext, useState } from "react";

export const myContext = createContext({} as any);
export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  return (
    <myContext.Provider value={{ open, setOpen }}>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider attribute="class" enableSystem={false}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </myContext.Provider>
  );
}
