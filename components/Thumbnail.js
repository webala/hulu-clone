import { ThumbUpIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { forwardRef } from "react"

const Thumbnail = forwardRef(({result}, ref) => {
    console.log(result)
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
  return (
    <div ref={ref} className="group cursor-pointer p-2 transition duration-200 transform sm:hover:scale-105 hover:z-10">
        <Image 
         layout="responsive"
         src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL$}${result.poster_path}`}
         width={1920}
         height={1080}
        />
        <div className="p-2">
            <p className="truncate max-w-md">{result.overview}</p>
            <h2 className="mt-1 text-white text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
            <p className="flex items-center transition-all duration-100 ease-in-out opacity-0 group-hover:opacity-100">
                {result.media_type && `${result.media_type} .`} {""}
                {result.release_date || result.first_air_date} .{""}
                <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count} 
            </p>
        </div>
    </div>
  )
})

export default Thumbnail