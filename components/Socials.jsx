import Link from "next/link";
import path from "path";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/iamshan22' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/shan-kona/' },
    { icon: <FaYoutube />, path: '' },
    { icon: <FaTwitter />, path: '' }
]

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles} >
            {socials.map((item, index) => {
                return (
                    <Link
                        href={item.path}
                        key={index}
                        className={iconStyles}
                    >{item.icon}

                    </Link>
                )
            })}
        </div>
    );
};

export default Socials;