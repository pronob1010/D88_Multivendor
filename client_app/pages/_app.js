import "../styles/globals.css";
import Layout from "./components/Layout/layout";
import myStore from "../redux/store";
import { Provider } from "react-redux";



function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
    <Provider store={myStore}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    </CookiesProvider>
  );
}

export default MyApp;
