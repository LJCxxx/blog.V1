import Image from "next/image"
import { IconRow } from "../footer"
import ContactForm from "./ContactForm"
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Contact',
  };

export default async function Contact() {

    return(
        <div className="bg-white text-black">
            <div className="w-11/12 lg:w-1/2 mx-auto pt-28 pb-5">
                <h1 className="text-4xl pb-1 border-b-2 border-gray-400">Contact</h1>
                <Image src={`/images/img_2906-1-2-1.webp`} alt={"img_2906-1-2-1"} width={1600} height={900} style={{ objectFit: 'contain', alignSelf: 'center' }} className="w-full h-auto mt-8"></Image>
                <p className="text-black text-xl mb-4 mt-8">
                    Have a story to share? 
                    Or perhaps are you looking for a new car? 
                    We’re here to work with you. Reach out to us, 
                    we’d love to chat and collaborate!
                </p>
                <div className="flex flex-row justify-center mt-8 my-5">
                    <IconRow colorFb="#1877F2" colorIg="#e4405f"/>
                </div>
                <ContactForm/>
            </div>
        </div>
    )
}