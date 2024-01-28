import { useNavigate } from "react-router-dom"

interface CategoryProps {
    id: string;
    name: string,
    category: string,
    image: string
}


const Category = ({id, name, category, image}: CategoryProps) => {

  const navigate = useNavigate()

  return (
    <div>
        <div onClick={() => navigate(`/image/${category}/${id}`)} className=" cursor-pointer">
            <h3>{name}.</h3>
            <img src={image} alt={category} width={500} height={200} />
        </div>
        {/* // category card */}

    </div>
  )
}

export default Category