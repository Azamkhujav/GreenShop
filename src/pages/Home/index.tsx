import { Pagination } from "antd";
import { plantCard, products } from "../../assets/db";
import Blogs from "../../components/blogs";
import BottomNav from "../../components/bottomNav";
import Card from "../../components/card";
import Filter from "../../components/filter";
import PlantCard from "../../components/plantCard";
import Slider from "../../components/slider";
import Tab from "../../components/tabs";

export default function Home() {
  const Tabs = [
    {
      label: "All Plants",
      key: "1",
    },
    {
      label: "New Arrivals",
      key: "2",
    },
    {
      label: "Sale",
      key: "3",
    },
  ];
  return (
    <main>
      <Slider />
      <div className="flex items-start justify-between sm:mb-[200px] mb-[80px] w-[100%]">
        <div className="sm:block hidden w-[26%]">
          <Filter />
        </div>
        <div className="sm:w-[70%] w-[100%]">
          <Tab items={Tabs} />
          <div className="flex items-center sm:justify-between flex-wrap sm:gap-[30px] justify-evenly">
            {products?.map((elem) => (
              <Card key={elem?.id} product={elem} />
            ))}
          </div>
          <Pagination className="mt-[40px] flex justify-end [&_.ant-pagination-item-active_a]:text-[#FFFF] [&_.ant-pagination-item-active]:bg-[#46A358] [&_.ant-pagination-item-active]:border-[#46A358] [&_.ant-pagination-item]:border-[#46A358]"  defaultCurrent={1} total={50} />
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-[60px] justify-center lg:justify-between md:justify-center sm:justify-center md:flex-wrap sm:flex-wrap lg:flex-nowrap lg:gap-0 md:gap-[60px] sm:gap-[60px] mb-[120px]">
        {plantCard?.map((elem) => (
          <PlantCard key={elem?.id} cardItem={elem} />
        ))}
      </div>
      <Blogs />
    </main>
  );
}
