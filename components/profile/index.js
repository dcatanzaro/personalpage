import React from "react";
import Link from "next/link";

import style from "./style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faLinkedinIn,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

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
                            src="/static/imgs/profile.jpg"
                            alt="Profile image"
                            width="120"
                        />
                    </div>

                    <h1>DAMIÁN CATANZARO</h1>

                    <p>FULL STACK WEB DEVELOPER</p>
                </header>
                <footer>
                    <ul>
                        <Link href="https://twitter.com/DamianCatanzaro">
                            <a target="_blank">
                                <li>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </li>
                            </a>
                        </Link>

                        <Link href="https://www.linkedin.com/in/damiancatanzaro/">
                            <a target="_blank">
                                <li>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </li>
                            </a>
                        </Link>

                        <Link href="https://github.com/dcatanzaro">
                            <a target="_blank">
                                <li>
                                    <FontAwesomeIcon icon={faGithub} />
                                </li>
                            </a>
                        </Link>
                    </ul>
                </footer>
            </section>
        );
    }
}

export default Profile;
