"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const MenuIcon =()=>{
    return(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" stroke="currentColor" strokeWidth={2} d="M3.75 6.75h16.5M3.75 12h15.5m-16.5 5.25H12"/>
    </svg> 
    );
}

export default function Navbar(){
    
    const [toggle, setToggle] = useState(true);
    const toggleNavbar =()=>{
        setToggle(!toggle);
    };

    const [navStyle, setNavStyle] = useState("md:bg-transparent md:text-white bg-white text-black");
    const [scrollPos, setScrollPos] = useState(0);
    const path = usePathname();

    const handleScroll=()=>{
        setScrollPos(window.scrollY);
    }

    useEffect(()=>{
        setToggle(true);
        if(path === '/'){
            window.addEventListener("scroll", handleScroll, {passive:true});
            return()=>{
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [path])

    useEffect(()=>{
        if(path != '/')
            setNavStyle("bg-white text-black shadow-sm shadow-gray-500");
        else{
            setNavStyle("bg-white text-black");
            if(scrollPos === 0 && window.scrollY === 0)
                setNavStyle("md:bg-transparent md:text-white bg-white text-black");
        }
    },[path, scrollPos])

    return(
        <nav className={`fixed w-full z-50 transition-colors duration-700 ${navStyle}`}>
            <div className="mx-auto md:flex items-center gap-6 px-8">
                <div className="flex items-center justify-between md:w-auto w-full me-auto">
                    {/* logo */}
                    <Link href="/" className="py-5 px-2 font-bold select-none">
                    <Image src={"/images/logo-vector.svg"} alt="sunday-speed-social-logo" width={40} height={40}></Image>
                    </Link>
                    {/* mobile icon */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleNavbar}><MenuIcon/></button>
                    </div>
                </div>
                <div className={`${toggle && 'hidden'} relative md:flex md:flex-row flex-col md:flex-wrap items-center justify-between md:space-x-1 pb-3 md:pb-0 text-center select-none`}>
                    <Link href={'/'} className="py-2 px-3 block">home</Link>
                    <Link href={'/editorial'} className="py-2 px-3 block">editorial</Link>
                    <Link href={'/marketplace'} className="py-2 px-3 block">marketplace</Link>
                    <Link href={'/about'} className="py-2 px-3 block">about</Link>
                    <Link href={'/contact'} className="py-2 px-3 block">contact</Link>
                </div>
            </div>
        </nav>
    )
}