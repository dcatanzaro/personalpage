import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import Head from "../components/Head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/style.scss";

import { config as configFA } from "@fortawesome/fontawesome-svg-core";
configFA.autoAddCss = false;

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props;
        return (
            <React.Fragment>
                <Head />
                <Container>
                    <Provider store={reduxStore}>
                        <Component {...pageProps} />
                    </Provider>
                </Container>
            </React.Fragment>
        );
    }
}

export default withReduxStore(MyApp);
