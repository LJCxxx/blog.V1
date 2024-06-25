import { Metadata } from "next";
export const metadata:Metadata={
    title: 'Marketplace',
}

import { Button } from "./Button";
import Image from "next/image";
import Content from "./GetData";
import Link from "next/link";
export default function Marketplace(){

    return(
        <div className="bg-white text-black">
            <div className="w-11/12 lg:w-1/2 mx-auto pt-28 pb-8">
                <h1 className="text-4xl pb-1 border-b-2 border-gray-400">Marketplace</h1>
                <Link href={'https://www.instagram.com/driveit.sg'} target="_blank" rel="noreferrer noopener">
                <Image src={`/images/sss-x-di-banner.webp`} alt={"about-pg-pic"} width={1600} height={900} style={{ objectFit: 'contain', alignSelf: 'center' }} className="w-full h-auto mt-8"></Image>
                </Link>
                <p className="text-xl mb-4 mt-8">
                    As much as we like crafting stories on cars, 
                    we&#39;re equally passionate in uncovering good deals 
                    and unique cars seeking a new home.
                </p>
                <p className="text-xl mb-4">
                    Working together with our friends at DriveIt, 
                    here&#39;s our curation of some pre-loved cars 
                    that we think are worth your time.
                </p>
                <Content/>
                <p className="text-xl mb-4">
                    Have something else in mind? 
                    Reach out to us, 
                    we might just be able to help you get that ride.
                </p>
                <p className="text-xl mb-8">
                    Life is too short to just dream. Get out and drive.
                </p>
                <Button/>
            </div>
        </div>
    );
}