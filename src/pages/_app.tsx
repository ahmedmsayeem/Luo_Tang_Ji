import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavigationBar from "@/components/navigation";
import FollowCursor from "@/components/mouse";
export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <NavigationBar></NavigationBar>
    <FollowCursor></FollowCursor>
    <Component {...pageProps} />
    </>
    );
}
