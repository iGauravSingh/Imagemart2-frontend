
import Navbar from "../components/Navbar"

import { categories } from "../utils/data";
import ImageCard from "../components/ImageCard";
import { useParams } from "react-router-dom";

import useImage from "../hooks/useImage";


const CategoryItem = () => {

  const { cat, id } = useParams<{ cat: string; id: string | undefined }>();
  const { data, loading, error } = useImage(id || "");

  if(loading) return <p>Loading...</p>

  return (
    <div className="">
        <Navbar />
        <div className=" ml-8 mt-8 font-serif font font-semibold text-2xl ">
          <h3>{cat && cat}</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-16">
            {data?.map(igg => (
                <div key={igg.id}><ImageCard id={igg.id} name={igg.imagename} img={igg.link} price={igg.price} /></div>
            ))}
        </div>
    </div>
  )
}

export default CategoryItem