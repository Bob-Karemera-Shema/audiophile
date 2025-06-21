import navLinks from "@/utils/navData";
import Image from "next/image";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="max-w-5xl mx-auto pt-12 lg:pt-16 pb-8 px-6 lg:px-0 flex flex-col gap-12 relative before:absolute before:content-[''] before:top-0 before:left-[50%] sm:before:left-6 lg:before:left-0 before:translate-x-[-50%] sm:before:translate-x-0 before:w-[100px] before:h-1 before:bg-dark-orange">
                <div className="flex flex-col sm:flex-row items-center gap-12 sm:justify-between">
                    <Link href="/" aria-label="Home Page">
                        <Image src="/images/main/image.svg" alt="Audiophile logo" width={144} height={25} />
                    </Link>
                    <ul className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
                        {
                            navLinks.map(link => (
                                <li key={link.label}>
                                    <Link
                                        href={link.path}
                                        aria-label={`${link.label} Page`}
                                        className="font-bold text-sm text-white uppercase tracking-widest hover:text-dark-orange transition-all duration-100 ease-in"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="w-full flex flex-col gap-1 sm:flex-row sm:items-end lg:justify-between">
                    <div className="flex flex-col gap-12 text-center sm:text-left text-font-gray lg:max-w-1/2">
                        <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                        <p>{`Copyright ${new Date().getFullYear()}. All Rights Reserved`}</p>
                    </div>
                    <div className="flex justify-center text-white gap-4 lg:max-w- lg:self-center">
                        <IoLogoFacebook className="w-8 h-8 hover:text-dark-orange transition-all ease-in duration-100" />
                        <FaTwitter className="w-8 h-8 hover:text-dark-orange transition-all ease-in duration-100" />
                        <FaInstagram className="w-8 h-8 hover:text-dark-orange transition-all ease-in duration-100" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;