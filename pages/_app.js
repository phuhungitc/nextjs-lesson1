import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/nprogress.min.css';
import '../styles/globals.css'
import Layout from '../components/Layout';
import NProgress from "nprogress";
import Router from "next/router";

NProgress.configure({ easing: 'easeInExpo', speed: 500, minimum: 0.5, showSpinner: false });
Router.onRouteChangeStart = url => {
    NProgress.start()
};
Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

function MyApp({Component, pageProps}) {
    return (
        <>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </>
    )
}

export default MyApp
