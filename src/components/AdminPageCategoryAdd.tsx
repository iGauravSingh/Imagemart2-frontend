import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";


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
  addCategory: (data: any) => Promise<void>
}

const AdminPageCategoryAdd = ({ data, loading, error, addCategory }: categoryAddProps) => {
  
    const [file,setFile] = useState(null);
    const [categoryname, setCategoryname] = useState("")
    const [categorytype, setCategorytype] = useState("")

    const handlefilechange = (e: any) => {
        setFile(e.target.files[0])
    }

    const handleform = (e: any) => {
        e.preventDefault()
        if(!file || !categoryname || !categorytype) return;

        const formData = new FormData();
        formData.append("file",file)
        formData.append("categoryname",categoryname)
        formData.append("categorytype",categorytype)

        addCategory(formData)
    }
  
  return (
    <div className=" ml-10">
      <div>
        {data ? (
          <div className="flex flex-wrap gap-4">
            {data.map((cat) => (
              <div key={cat?.id} className="">
                <p>{cat?.categorytype}</p>
                <img
                  className=" w-10 h-10"
                  src={cat?.coverimage}
                  alt={cat?.categorytype}
                />
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* form to add category  */}
      <div className=" mt-6">
      <form>
          <div className="flex flex-col gap-4">
          <input type="file" onChange={handlefilechange} accept="image/*" />
      <input type="text" placeholder="Category name" value={categoryname} onChange={(e) => setCategoryname(e.target.value)} />
      <input type="text" placeholder="Category type" value={categorytype} onChange={(e) => setCategorytype(e.target.value)} />
      <button className=" bg-black text-white w-20 h-12 px-2 py-2 text-center" onClick={handleform}>Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPageCategoryAdd;
