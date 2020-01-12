import React from "react";
import { Carousel } from "react-responsive-carousel";

import style from "./style.scss";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

class PortfolioWork extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { portfolio } = this.props;

        return (
            <section className={style.portfolioWorkContainer}>
                <header>
                    <h4>{portfolio.title}</h4>
                    <h5>{portfolio.subtitle}</h5>

                    <Carousel
                        showArrows={true}
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop={true}
                        showIndicators={false}
                        className={style.carousel}
                        labels={{
                            leftArrow: "Navegación derecha",
                            rightArrow: "Navegación derecha"
                        }}
                    >
                        {portfolio.images.map((image, index) => (
                            <div key={index}>
                                <img src={image.img} alt={image.alt} />
                            </div>
                        ))}
                    </Carousel>
                </header>
                <footer>
                    {portfolio.description ? (
                        <h5>Descripción</h5>
                    ) : (
                        <h5>Tecnologías usadas</h5>
                    )}

                    <p
                        dangerouslySetInnerHTML={{
                            __html: portfolio.description
                                ? portfolio.description
                                : portfolio.technologiesDescription
                        }}
                    />
                </footer>
            </section>
        );
    }
}

export default PortfolioWork;
