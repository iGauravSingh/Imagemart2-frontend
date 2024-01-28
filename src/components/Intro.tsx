import Button from "./Button";
import Category from "./Category";

// category array
import { categories } from "../utils/data";

interface Category {
  id: number;
  categoryname: string;
  categorytype: string;
  coverimage: string
}

interface IntroProps {
  data: Category[] | null
}

const Intro = ({data}: IntroProps) => {
  return (
    <div className=" mt-16 w-screen  px-48">
      <div className=" text-center font-montse">
        <h1 className="text-4xl md:text-5xl font-bold">
          Unleash Creativity with AI Masterpieces
        </h1>
        <p className=" mt-8 text-xl font-medium">
          Discover art reimagined through AI. Our platform unveils a captivating
          array of images, pushing the limits of creativity and reshaping the
          landscape of visual expression.
        </p>
      </div>

      <div className=" text-center mt-12">
        <Button heading="View Plans" color="purple" />
      </div>

      {/* ////Popular Search Terms */}

      <div className="w-full mt-24 pb-12 font-montse ">
        <div className="mt-12 justify-center items-center">
          <h3 className="text-center text-2xl md:text-3xl font-bold ">
            Trending search terms
          </h3>
          <div className="flex justify-center mt-14">
            <Button heading="New Year" />
            <Button heading="Christmas" />
            <Button heading="Wars" />
            <Button heading="Holiday" />
          </div>
          <div className=" mt-28 text-center text-2xl md:text-3xl font-bold">
            <h3>Trending Photo Category.</h3>
            <div className="flex flex-wrap gap-6 mt-12 justify-center">
            {data?.map((cat) => (
                <div className="" key={cat.id}>
                    <Category id={cat.id.toString()} name={cat.categoryname} category={cat.categorytype} image={cat.coverimage} />
                </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
