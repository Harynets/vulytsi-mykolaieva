import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <footer className="bg-[#f8f9fa] p-11">
            <div className="flex items-center flex-col">
                <div className="flex">
                    <Link href="#">
                        <p className="text-xl hover:text-green-500">Умови</p>
                    </Link>
                    <Link href="#">
                        <p className="text-xl hover:text-green-500 mx-10">Конфіденційність</p>
                    </Link>
                    <Link href="#">
                        <p className="text-xl hover:text-green-500">Cookies</p>
                    </Link>
                </div>

                <div className="flex py-7">
                    <Link href="#">
                        <img className="h-8 hover:scale-110" src="/logo-instagram.svg" alt="instagram logo"></img>
                    </Link>
                    <Link href="#">
                        <img className="h-8 hover:scale-110 mx-14" src="/logo-twitter.svg" alt="twitter logo"></img>
                    </Link>
                    <Link href="#">
                        <img className="h-8 hover:scale-110" src="/logo-facebook.svg" alt="facebook logo"></img>
                    </Link>
                </div>

                <p className="font-bold">&copy; Всі права захищені</p>
            </div>
        </footer>
    );
}

export default Footer;
