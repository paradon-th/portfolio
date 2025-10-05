import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
interface FooterProps {
  isDarkMode: boolean;
} 
const Footer: React.FC<FooterProps> = ({isDarkMode}) => {
    return (
        <div className="mt-20">
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-0">
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
                    paradon.thth@gmail.com
                </div>
                <p>
                    © {new Date().getFullYear()} Paradon Thonthong. All rights reserved.
                </p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target="_blank" href="https://github.com/paradon-th">GitHub</a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/paradon-thonthong-256504351/">LinkedIn</a></li>
                    <li><a target="_blank" href="https://www.instagram.com/tagburn">Instagram</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
