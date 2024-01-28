import { RxCross1 } from "react-icons/rx";

interface BrowseProps {
    closeBrowse: () => void
}

const Browse = ({closeBrowse}: BrowseProps) => {
  return (
    <div className="w-screen h-screen backdrop-brightness-50  absolute inset-0 z-50  ">
      <div className="w-[300px] h-full bg-slate-100 flex flex-col px-4 py-6">
        <div className="w-full flex justify-end">
          <div onClick={closeBrowse} className=" cursor-pointer">
            <RxCross1 size={30} />
          </div>
        </div>
        <div className=" mt-8 flex flex-col items-center justify-center cursor-pointer">
          <p className=" font-montse font-bold text-xl pt-6">Images</p>
          <p className=" font-montse font-bold text-xl pt-6">Collection</p>
          <p className=" font-montse font-bold text-xl pt-6">Generate</p>
        </div>
      </div>
    </div>
  );
};

export default Browse;
