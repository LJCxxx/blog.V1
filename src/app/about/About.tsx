'use client';
import Image from "next/image";

export default function About(){

    const redirect1=()=>{
        window.open("https://www.instagram.com/sif_kx/");
    }

    const redirect2=()=>{
        window.open("https://www.instagram.com/sengfoto/");
    }

     return(
        <div className="bg-white text-black">
            <div className="w-11/12 lg:w-1/2 mx-auto pt-28 pb-1">
            <h1 className="text-4xl pb-1">About</h1>
                <div className="border-y-2 border-gray-400">
                    <Image src={`/images/about-pg-pic.webp`} alt={"about-pg-pic"} width={1600} height={900} style={{ objectFit: 'contain', alignSelf: 'center' }} className="w-full h-auto mt-8"></Image>
                    <p className="text-black text-xl mb-4 mt-8">
                        Ah, you’ve found us! Welcome to Sunday Speed Social, 
                        your go-to destination for everything automotive, 
                        where we celebrate the intricacies of analogue cars, 
                        the joy of driving, and the vibrant automotive culture.
                    </p>
                    <p className="text-xl mb-4">
                        We believe that cars are more than just a means of transportation; 
                        they are an expression of art, engineering, and individuality. 
                        Passion for timeless analogue cars and the essence of driving, 
                        courses through us. We are here to inspire, inform, 
                        and entertain fellow enthusiasts who share our love for the 
                        open road and the soulful machines that navigate it.
                    </p>
                    <p className="text-xl mb-8">
                        Buckle up, it’s time to embark on an extraordinary adventure together!
                    </p>
                </div>
                <h1 className="text-3xl font-semibold mt-12 my-6">Behind-the-scenes</h1>
                <div className="grid grid-cols-2 gap-24 mb-16">
                    <div>
                        <div className="flex flex-row">
                            <h2 className="text-2xl">Brandon</h2>
                            <button onClick={redirect1} className="ms-auto mx-7 bg-[#e4405f] hover:bg-[#6F2DBD] rounded-full size-[27] my-auto flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                </svg>
                            </button>
                        </div>
                        <p className="text-md mt-3">The thrill of driving is one to be experienced than described.</p>
                    </div>
                    <div>
                        <div className="flex flex-row">
                            <h2 className="text-2xl">Sheng</h2>
                            <button onClick={redirect2} className="ms-auto mx-7 bg-[#e4405f] hover:bg-[#6F2DBD] rounded-full size-[27] my-auto flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                </svg>
                            </button>
                        </div>
                        <p className="text-md mt-3">Advocate of carburettors.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}