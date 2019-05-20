import Head from "next/head";

export default () => (
    <Head>
        <title>Damián Catanzaro</title>
        <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,user-scalable=no,minimum-scale=1.0,maximum-scale=1.0"
        />

        <script
            dangerouslySetInnerHTML={{
                __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                    
                    ga('create', 'UA-28173560-21', 'auto');
                    ga('send', 'pageview');`
            }}
        />

        <meta name="description" content="Full Stack Web Developer" />

        <meta
            name="image"
            content="https://damiancatanzaro.com/static/imgs/profile.jpg"
        />

        <meta itemProp="name" content="Damián Catanzaro" />
        <meta itemProp="description" content="Full Stack Web Developer" />
        <meta
            itemProp="image"
            content="https://damiancatanzaro.com/static/imgs/profile.jpg"
        />

        <meta name="og:title" content="Damián Catanzaro" />
        <meta name="og:description" content="Full Stack Web Developer" />
        <meta
            name="og:image"
            content="https://damiancatanzaro.com/static/imgs/profile.jpg"
        />
        <meta name="og:url" content="https://damiancatanzaro.com.ar/" />
        <meta name="og:site_name" content="Damián Catanzaro" />
        <meta name="og:locale" content="es_ES" />
        <meta name="og:type" content="website" />

        <meta
            prefix="og: http://ogp.me/ns#"
            property="og:title"
            content="Damián Catanzaro"
        />
        <meta
            prefix="og: http://ogp.me/ns#"
            property="og:type"
            content="website"
        />
        <meta
            prefix="og: http://ogp.me/ns#"
            property="og:image"
            content="https://damiancatanzaro.com/static/imgs/profile.jpg"
        />
        <meta
            prefix="og: http://ogp.me/ns#"
            property="og:url"
            content="https://damiancatanzaro.com.ar/"
        />
        <meta
            prefix="og: http://ogp.me/ns#"
            property="og:description"
            content="Full Stack Web Developer"
        />
    </Head>
);
