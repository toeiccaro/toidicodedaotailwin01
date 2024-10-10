export const UserProfile: () => JSX.Element = (): JSX.Element => {
    return <div className="w-[36rem] bg-white p-12 flex gap-x-4">
        <img 
            src="https://placewaifu.com/image/209" 
            className="w-64 rounded-full border-[11px] border-[#E6EFFA]"
            alt=""></img>
        <div className="space-y-7">
            <div>            
                <h1 className="text-3xl text-[#0a0202f3] font-popi">David Grant</h1>
                <h2 className="mt-1">3D Artist</h2>
            </div>

            <div className="space-y-4">
                <p className="flex items-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                    stroke="currentColor" className="size-6 inline-block mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    4.7 Rating</p>
                <p className="flex items-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                    className="size-6 inline-block mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                    4.447 Reviews</p>

                <p className="flex items-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" 
                    className="size-6 inline-block mr-1">
                    <path d="M12 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1ZM6.5 6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6ZM2 9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9Z" />
                    </svg>
                    478 Students</p>

            </div>
            
            <p className="text-lg"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eligendi, 
                porro veritatis nemo fugit omnis, possimus voluptates, alias numquam.
            </p>

            <button className="rounded-md border-2 border-[#000000] p-2" >Show more</button>
        </div>
    </div>
}
  