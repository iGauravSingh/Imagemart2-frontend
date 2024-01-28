import AdminPageCategoryAdd from "../components/AdminPageCategoryAdd"
import AdminPageImageUpload from "../components/AdminPageImageUpload"
import useCategoryList from "../hooks/useCategory"

const AdminPage = () => {

    const { data, loading, error, addCategory } = useCategoryList()

  return (
    <div className=" w-screen min-h-screen flex flex-col gap-10">
        <AdminPageCategoryAdd data={data} loading={loading} error={error} addCategory={addCategory} />
        <AdminPageImageUpload data={data} loading={loading} error={error} />
    </div>
  )
}

export default AdminPage