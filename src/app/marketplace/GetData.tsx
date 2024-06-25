import Image from "next/image";
import Link from "next/link";

async function getMarketFeed() {
    const res = await fetch(`${process.env.API}/api/collections/marketplaceFeed/records`);
    const data = await res.json();
    return data?.items as any[];
}

function MarketplaceFeed({data}:any){
    const {collectionId, id ,name, coverImage, link} = data || {};
    const CoverImage =()=>{
        return(
            <Image src={`${process.env.API}/api/files/${collectionId}/${id}/${coverImage}`} alt={name} width={1600} height={900} style={{ objectFit: 'contain', alignSelf: 'center' }} className="w-full h-auto my-2"></Image>
        )
    }

    return(
        <Link href={link} target="_blank" rel="noreferrer noopener">
            <div className="relative group">
                <CoverImage />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-65 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h1 className="text-gray-100 text-xl uppercase">check it out</h1>
                </div>
            </div>
        </Link>
    );
    
}

export default async function Content(){
    const marketplace = (await getMarketFeed()).reverse();

    return(
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4 mb-4">
            {marketplace?.map((marketplace)=>{
                return <MarketplaceFeed key={marketplace.id} data={marketplace}/>
            })}
        </div>
    );
}