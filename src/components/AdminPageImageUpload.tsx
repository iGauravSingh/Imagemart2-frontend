import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import useImage from "../hooks/useImage";

interface Category {
  id: number;
  categoryname: string;
  categorytype: string;
  coverimage: string;
}

interface categoryAddProps {
  data: Category[] | null;
  loading: boolean;
  error: string | null;
}

const AdminPageImageUpload = ({ data, loading, error }: categoryAddProps) => {
  const { addImage } = useImage();
  const [file, setFile] = useState<File | null>(null);
  const [categoryId, setCategoryId] = useState(0);

  const [category, setCategory] = useState("a1");
  const [one, setOne] = useState(false);

  const handleOne = () => {
    setOne((prevState) => !prevState);
  };

  // const handlefilechange = (e: any) => {
  //     setFile(e.target.files[0])
  // }

  const handlefilechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  ////

  const handleCategoryClick = (id: number, catego: string) => {
    setCategory(catego);
    setCategoryId(id);
  };

  const handleform = (e: any) => {
    e.preventDefault();
    if (!file || !category) return;

    const imageName = `image-${category}-${uuidv4()}`;
    const fileSize = Math.ceil(file.size / 1024);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("imagename", imageName);
    formData.append("category", category);
    formData.append("id", categoryId.toString());
    formData.append("size", fileSize.toString());
    // console.log('image submitted')

    console.log(fileSize, imageName);

    //formData.append("size",size)

    addImage(formData);
  };

  return (
    <div className=" flex ml-10 border-t-2 border-black py-6">
      <div>{data ? <div className="flex gap-4"></div> : <p>Loading...</p>}</div>

      {/* form to add category  */}
      <div>
        <form>
          <input type="file" onChange={handlefilechange} accept="image/*" />
          <div>
            <div
              className=" cursor-pointer mt-2 w-[200px] "
              onClick={handleOne}>
              {/* // question  */}
              <div className="font-montse flex justify-between items-center  bg-purple-400 py-4 px-4 rounded-lg">
                <p>select Category</p>
                {one ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
              {/* // answer */}
              <div className={`${one ? null : "hidden"}`}>
                {data?.map((cat) => (
                  <p
                    key={cat.id}
                    onClick={() =>
                      handleCategoryClick(cat.id, cat.categorytype)
                    }
                  >
                    {cat.categorytype}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <button className=" bg-black text-white w-20 h-12 px-2 py-2 text-center" onClick={handleform}>Upload</button>
        </form>
      </div>
      <p>{category}</p>
    </div>
  );
};

export default AdminPageImageUpload;
