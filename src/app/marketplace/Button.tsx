'use client';

const redirect =()=>{
    window.location.href="/contact";
}

export const Button =()=>{
    return(
    <button type="button" onClick={redirect} className="w-full text-white bg-black hover:border-yellow-500 hover:bg-yellow-500 focus:outline-dotted outline-offset-2 outline-1 outline-yellow-500 font-medium rounded-none text-sm px-5 py-2.5 text-center uppercase">get in touch</button>
    );
}  

