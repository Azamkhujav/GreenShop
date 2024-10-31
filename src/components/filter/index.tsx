import React, { useState } from "react";
import useHooks from "../../hooks/useHooks";
import { Slider } from "antd";
import { Category } from "../../types";
import List from "./list";
import SuperSaleBanner from "../../assets/icons/SuperSaleBanner.png";
const categories: Category[] = [
  { name: "House Plants", count: 33 },
  { name: "Potter Plants", count: 12 },
  { name: "Seeds", count: 65 },
  { name: "Small Plants", count: 39 },
  { name: "Big Plants", count: 23 },
  { name: "Succulents", count: 17 },
  { name: "Terrariums", count: 19 },
  { name: "Gardening", count: 13 },
  { name: "Accessories", count: 18 },
];
const sizes: Category[] = [
  { name: "Small", count: 119 },
  { name: "Medium", count: 86 },
  { name: "Large", count: 78 },
];

export default function Filter() {
  const { navigate, query, qs } = useHooks();
  const [price, setPrice] = useState([39, 1230]);
  const handleFilter = (options: { [name: string]: number }) => {
    navigate({ search: qs.stringify({ ...query, ...options }) });
  };
  return (
    <div className=" w-full" >
      <div className=" p-[20px]  bg-[#FBFBFB]">
        <List
          title="Categories"
          keyName="category"
          list={categories}
          handleFilter={handleFilter}
        />
        <div className="mb-[40px] mt-[40px]">
          <h2 className="font-semibold text-[18px] mb-4 text-[#3D3D3D]" >Price Range</h2>
          <div className="pl-[10px]">
            <Slider
              className="[&_.ant-slider-track]:bg-[#46A358] [&_.ant-slider-handle]:after:bg-[#46A358] [&_.ant-slider-handle]:after:shadow-[#46A358]"
              range
              max={1230}
              min={0}
              value={price}
              onChange={setPrice}
            />
            <p className="text-sm mt-2 text-[#3D3D3D]">
              Price: ${price[0]} – ${price[1]}
            </p>
            <button
              onClick={() => {
                handleFilter({ from: price[0], to: price[1] });
              }}
              className="mt-4 text-[16px] font-semibold py-[7.5px] px-[25px] bg-[#46A358] text-white rounded"
            >
              Filter
            </button>
          </div>
        </div>
        <List
          title="Size"
          keyName="size"
          list={sizes}
          handleFilter={handleFilter}
        />
      </div>
      <img src={SuperSaleBanner} alt="SuperSaleBanner" className="sm:block hidden" />
    </div>
  );
}
