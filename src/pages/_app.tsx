import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavigationBar from "@/components/navigation";
export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <NavigationBar></NavigationBar>
    <Component {...pageProps} />
    </>
    );
}
