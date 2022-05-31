import "../src/assets/scss/main.scss";
import { wrapper } from "../store/store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
