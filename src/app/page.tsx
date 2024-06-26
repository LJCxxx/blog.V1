'use client';

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <>
      <div className="flex flex-col justify-between items-center bg-fixed bg-cover h-screen bg-no-repeat bg-center bg-[url('/images/wagons1c2.jpg')]">
        <div className="absolute inset-0 w-full h-screen bg-black bg-opacity-50"></div>
        <h1 className="pt-3 mt-auto text-center md:text-6xl text-4xl sm:text-5xl select-none z-10">Cars. Conversation. Culture.</h1>
        <div className="mt-auto pb-3 z-10 w-full flex flex-col justify-center items-center">
          <button onClick={()=>router.push('/editorial')} type="button" className="w-3/4 xl:w-1/2 text-white border border-white hover:border-yellow-500 hover:bg-yellow-500 focus:outline-dotted outline-offset-2 outline-1 outline-yellow-500 font-medium rounded-full text-sm px-5 py-2.5 text-center ">ENTER</button>
        </div>
      </div>
      <div className="bg-white text-black content-center" style={{height:'220px'}}>
        <div className="mx-auto w-3/4 xl:w-1/2">
          <h1 className=" md:text-4xl sm:text-3xl text-2xl">Marketplace</h1>
          <p className="md:text-lg text-base my-5">Our curation of pre-loved cars we think are worth your time.</p>
          <button onClick={()=>router.push('/marketplace')} type="button" className="w-full text-white bg-black hover:border-yellow-500 hover:bg-yellow-500 focus:outline-dotted outline-offset-2 outline-1 outline-yellow-500 font-medium rounded-none text-sm px-5 py-2.5 text-center ">LEARN MORE</button>
        </div>
      </div>
    </>
  );
}