import notfound from '../assets/notfound.png'

const PageNotFound = () => {
  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
        <div>
            <img src={notfound} alt="404" />
        </div>
    </div>
  )
}

export default PageNotFound