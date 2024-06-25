import Image from "next/image";

export async function generateMetadata({params}: any) {
    const post = await getPost(params.id);
    return {
      title: post.title,
    }
  }

async function getPost(postId: string){
    const res = await fetch(`${process.env.API}/api/collections/BlogFeed/records/${postId}`);
    const data = await res.json();
    return data;
}

export default async function PostPage({params}: any) {
    const post = await getPost(params.id);
    const cont = {__html: post.postContent};

    const CoverImage =()=>{
        return(
            <Image src={`${process.env.API}/api/files/${post.collectionId}/${post.id}/${post.coverImage}`} alt={post.coverImage} width={1600} height={900} style={{ objectFit: 'contain', alignSelf: 'center' }} className="w-full h-auto my-8"></Image>
        )
    }

    return(
        <div className="relative w-screen bg-white text-black pt-28">
            <div className='w-11/12 lg:w-1/2 mx-auto'>
                <h2 className="text-3xl">{post.title}</h2>
                <CoverImage/>
                <div className="text-xl pb-11"dangerouslySetInnerHTML={cont}></div>
            </div> 
        </div>
    )
}