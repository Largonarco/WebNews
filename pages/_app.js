import Layout from "../components/Layout";
import Nav from "../components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Layout children={<Component {...pageProps} />} />
    </>
  );
}

export default MyApp;
