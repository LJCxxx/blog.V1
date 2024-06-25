import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata:Metadata={
    title: 'Editorial',
}
async function getBlog() {
    const res = await fetch(`${process.env.API}/api/collections/BlogFeed/records/`);
    const data = await res.json();
    return data?.items as any[];
}

function Blog({blog}:any){
    const {collectionId, id, title, coverImage, date, caption} = blog || {};

    const CoverImage =()=>{
        return(
            <Image src={`${process.env.API}/api/files/${collectionId}/${id}/${coverImage}`} alt={coverImage} width={1600} height={900} style={{ objectFit: 'contain', alignSelf: 'center' }} className="w-full h-auto my-2"></Image>
        )
    }

    return (
        <Link href={`/editorial/${id}`}>
            <div className="group my-8 text-black">
                <h2 className="text-3xl">{title}</h2>
                <p className="pb-2">{date}</p>
                <div className="relative h-auto w-full">
                    <CoverImage/>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-65 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h1 className="text-gray-100 text-xl uppercase">read more</h1>
                    </div>
                </div>
                <p className="pt-2 text-2xl">{caption}</p>
            </div>
        </Link>
    )
}

export default async function BlogFeed(){
    const blog = (await getBlog()).reverse();

    return(
        <div className="bg-white">
            <div className='w-11/12 lg:w-1/2 mx-auto pt-28 pb-5'>
                <h1 className="text-black text-4xl pb-1 border-b-2 border-gray-400">Editorial</h1>
                {blog?.map((blog)=>{
                    return <Blog key={blog.id} blog={blog}/>;
                })}
            </div>
        </div>
    );
}
