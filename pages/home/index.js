import React from "react";
import { connect } from "react-redux";
import Profile from "../../components/profile/index";
import PortfolioWork from "../../components/portfolioWork/index";

import style from "./style.scss";

class StepAmount extends React.Component {
    static getInitialProps({ reduxStore, req }) {
        return {};
    }

    constructor(props) {
        super(props);

        this.state = {
            portfolio: [
                {
                    title: "CourseIT",
                    subtitle: "Proyecto personal",
                    images: [
                        "/static/imgs/portfolio/CourseIT/1.jpg",
                        "/static/imgs/portfolio/CourseIT/2.jpg",
                        "/static/imgs/portfolio/CourseIT/3.jpg",
                        "/static/imgs/portfolio/CourseIT/4.jpg"
                    ],
                    technologiesDescription:
                        "HTML5, CSS3, JavaScript, NodeJS, MongoDB, WebSockets, DigitalOcean"
                },
                {
                    title: "Catálogo de caballos",
                    subtitle: "Cliente: Alegria Polo",
                    images: [
                        "/static/imgs/portfolio/AlegriaPolo/alegriapolo_1.jpg",
                        "/static/imgs/portfolio/AlegriaPolo/alegriapolo_2.jpg",
                        "/static/imgs/portfolio/AlegriaPolo/alegriapolo_3.jpg"
                    ],
                    technologiesDescription:
                        "HTML5, CSS3, JavaScript, PreactJS, Apache Cordova"
                },
                {
                    title: "Contador de elecciones con RaspberryPi",
                    subtitle: "Cliente: Cambiemos",
                    images: [
                        "/static/imgs/portfolio/Cambiemos/cambiemos_1.jpg",
                        "/static/imgs/portfolio/Cambiemos/cambiemos_2.jpg",
                        "/static/imgs/portfolio/Cambiemos/cambiemos_3.jpg"
                    ],
                    technologiesDescription:
                        "HTML5, CSS3, JavaScript, Raspberry Pi con Raspbian"
                },
                {
                    title: "Argentum Online Web",
                    subtitle: "Proyecto personal",
                    images: [
                        "/static/imgs/portfolio/AOWeb/aoweb_1.jpg",
                        "/static/imgs/portfolio/AOWeb/aoweb_2.jpg",
                        "/static/imgs/portfolio/AOWeb/aoweb_3.jpg"
                    ],
                    technologiesDescription:
                        "HTML5, CSS3, JavaScript, Canvas, NodeJS, MySQL, WebSockets, DigitalOcean"
                },
                {
                    title: "OnBoarding de producto + Backoffice",
                    subtitle: "Cliente: Digiventures",
                    images: [
                        "/static/imgs/portfolio/Digiventures/1.jpg",
                        "/static/imgs/portfolio/Digiventures/2.jpg",
                        "/static/imgs/portfolio/Digiventures/3.jpg"
                    ],
                    technologiesDescription:
                        "HTML5, CSS3, JavaScript, NodeJS, MongoDB, AWS"
                },

                {
                    title: "Career Path",
                    subtitle: "Cliente: Philip Morris International",
                    images: [
                        "/static/imgs/portfolio/CareerPathPM/1.jpg",
                        "/static/imgs/portfolio/CareerPathPM/2.jpg",
                        "/static/imgs/portfolio/CareerPathPM/3.jpg"
                    ],
                    technologiesDescription: "HTML5, CSS3, JavaScript, PHP"
                },
                {
                    title: "ChatBot",
                    subtitle: "Proyecto personal",
                    images: [
                        "/static/imgs/portfolio/ChatBot/1.jpg",
                        "/static/imgs/portfolio/ChatBot/2.jpg",
                        "/static/imgs/portfolio/ChatBot/3.jpg"
                    ],
                    technologiesDescription:
                        "HTML5, CSS3, JavaScript, NodeJS, MongoDB, WebSockets, DigitalOcean"
                },
                {
                    title: "Portal de Casamientos",
                    subtitle: "Cliente: CasarCasar",
                    images: [
                        "/static/imgs/portfolio/CasarCasar/1.jpg",
                        "/static/imgs/portfolio/CasarCasar/2.jpg"
                    ],
                    technologiesDescription:
                        "HTML5, CSS3, JavaScript, PHP, DigitalOcean"
                },

                {
                    title: "Plataforma educativa",
                    subtitle: "Cliente: IATE Digital",
                    images: [
                        "/static/imgs/portfolio/IATEDigital/1.jpg",
                        "/static/imgs/portfolio/IATEDigital/2.jpg",
                        "/static/imgs/portfolio/IATEDigital/3.jpg"
                    ],
                    technologiesDescription:
                        "HTML5, CSS3, JavaScript, Preact, Apache Cordova"
                },
                {
                    title: "Inmueble Directo",
                    subtitle: "Proyecto personal",
                    images: [
                        "/static/imgs/portfolio/InmuebleDirecto/1.jpg",
                        "/static/imgs/portfolio/InmuebleDirecto/2.jpg",
                        "/static/imgs/portfolio/InmuebleDirecto/3.jpg"
                    ],
                    technologiesDescription:
                        "HTML5, CSS3, JavaScript, NodeJS, MongoDB, DigitalOcean"
                },
                {
                    title: "Control de stock + App",
                    subtitle: "Cliente: Iberia Hogar",
                    images: [
                        "/static/imgs/portfolio/IberiaHogar/1.jpg",
                        "/static/imgs/portfolio/IberiaHogar/2.jpg",
                        "/static/imgs/portfolio/IberiaHogar/3.jpg",
                        "/static/imgs/portfolio/IberiaHogar/4.jpg"
                    ],
                    technologiesDescription:
                        "HTML5, CSS3, JavaScript, PHP, Mysql, Google App Engine"
                }
            ],
            companies: [
                {
                    title: "Frontend Engineer",
                    subtitle: "MercadoLibre",
                    images: [
                        "/static/imgs/portfolio/MercadoLibre/mercadolibre.jpg"
                    ],
                    description:
                        "Trabajé en el area de Customer Experience creando herramientas para los representantes."
                },
                {
                    title: "Frontend Engineer",
                    subtitle: "Garbarino",
                    images: ["/static/imgs/portfolio/Garbarino/garbarino.jpg"],
                    description:
                        "Trabajé en la creación de la PWA del sitio mejorando así un 27% de conversión via mobile. <a href='https://www.thinkwithgoogle.com/intl/es-419/recursos-y-herramientas/m%C3%B3vil/garbarino-mejora-la-experiencia-movil-a-traves-de-su-progressive-web-app/' target='_blank'>Caso de éxito en Google</a>"
                }
            ]
        };
    }

    render() {
        const { portfolio, companies } = this.state;

        return (
            <React.Fragment>
                <Profile />

                <h3>Empresas en las que trabajé</h3>

                <div className={style.portfolioContainer}>
                    {companies.map((item, index) => (
                        <PortfolioWork portfolio={item} key={index} />
                    ))}
                </div>

                <h3>Trabajos realizados</h3>

                <div className={style.portfolioContainer}>
                    {portfolio.map((item, index) => (
                        <PortfolioWork portfolio={item} key={index} />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default connect()(StepAmount);
