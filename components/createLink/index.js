import Link from "next/link";
import { buildUrl } from "../../config/utils";

const CreateLink = ({ children, href }) => {
    const url = buildUrl(href);

    return (
        <Link href={url.href} as={url.as}>
            {children}
        </Link>
    );
};

export default CreateLink;
