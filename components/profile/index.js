import React from "react";
import Link from "next/link";

import style from "./style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faLinkedinIn,
    faGithub,
    faBloggerB
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={style.profileContainer}>
                <header>
                    <div className={style.profileImage}>
                        <img
                            src="/static/imgs/profile-2.jpg"
                            alt="Profile image"
                            width="120"
                        />
                    </div>

                    <h1>DAMIÁN CATANZARO</h1>

                    <p>FULL STACK WEB DEVELOPER</p>
                </header>
                <footer>
                    <ul>
                        <li>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://twitter.com/DamianCatanzaro"
                            >
                                Twitter
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>

                        <li>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://damiancatanzaro.com/blog/?utm_source=personalpage"
                            >
                                Blog
                                <FontAwesomeIcon icon={faBloggerB} />
                            </a>
                        </li>

                        <li>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/in/damiancatanzaro/"
                            >
                                LinkedIn
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>

                        <li>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://github.com/dcatanzaro"
                            >
                                GitHub
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>

                        <li>
                            <a
                                rel="noreferrer"
                                href="mailto:damiancatanzaro@gmail.com"
                            >
                                Mail
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </li>
                    </ul>
                </footer>
            </section>
        );
    }
}

export default Profile;
