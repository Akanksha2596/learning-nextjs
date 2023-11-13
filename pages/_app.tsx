import "@/styles/globals.css"; //to add global styles : importing is imp under this page
//component exported is a wrapper component fo rour every page app

import "bootstrap/dist/css/bootstrap.min.css"; // use bootstrap classes in our app
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import "../styles/layout.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { AppProps } from "next/app";

// interface ExtendedComponentType extends NextComponentType {
//   getLayout?: (page: JSX.Element) => JSX.Element;
// }
const theme = {
  colors: {
    primary: "#42b9f5",
  },
};
export default function App({ Component, pageProps }: AppProps) {
  //  if(Component.getLayout) {
  //   return Component.getLayout(<Component {...pageProps}/>)
  //  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
