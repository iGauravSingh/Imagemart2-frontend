
import Navbar from "../components/Navbar";
import PriceTable from "../components/PriceTable";


const plans = [
  {id: 1,name: 'Basic Plan', p1: 'Download all images', p2: 'Life time access', p3: 'generate images via propmts', price: 10},
  {id: 2,name: 'Premium Plan', p1: 'Download all images', p2: 'Life time access', p3: 'generate images via propmts', price: 100}
]

const PricingPage = () => {
  return (
    <div className=" w-screen">
      <Navbar />
      <div className=" w-full flex flex-col md:flex-row md:justify-center items-center gap-8 mt-10">
        {plans.map((plan) => (
          <div key={plan.id} className="">
            <PriceTable plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
