import { useEffect } from "react";
import { useRouter } from "next/router";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/style.scss";
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

import { config as configFA } from "@fortawesome/fontawesome-svg-core";
configFA.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();

    const handleRouteChange = () => {
        if (window.plausible) {
            window.plausible("pageview");
        }
    };

    useEffect(() => {
        router.events.on("routeChangeComplete", handleRouteChange);
        router.events.off("routeChangeComplete", handleRouteChange);
    }, [router.events]);

    return <Component {...pageProps} />;
}
