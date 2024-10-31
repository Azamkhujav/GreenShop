import { IProducts } from "../../types";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
export default function Card(prop: { product: IProducts }) {
  const { product } = prop;
  return (
    <div className="relative card md:max-w-[258px] sm:max-w-[200px] max-w-[175px] w-[100%] overflow-hidden group">
      <button className="block sm:hidden w-[40px] absolute top-[10px] right-[10px]  bg-[#FFFF] p-[5px] rounded">
        <HeartOutlined className="text-2xl text-[#46A358]" />
      </button>
      {product?.sale > 0 && <p className="absolute top-0 left-0 px-[10px] bg-[#46A358] text-[16px] font-medium text-[#FFFFFF]" >{product?.sale}%OFF</p>}
      <div>
        <div className="bg-[#FBFBFB] md:h-[300px] sm:h-[230px] h-[200px] w-[100%] p-[10px] mb-[10px] sm:rounded-none rounded-[30px]">
          <img
            className="mx-auto object-contain"
            src={product?.img}
            alt="flower"
          />
        </div>
        <p className="card-title font-normal text-[16px] leading-[16px] text-[#3D3D3D] mb-[5px]">
          {product?.name}
        </p>
        <p className="text-[18px] leading-[18px] font-bold text-[#46A358]">
          {product?.price}
        </p>
      </div>
      <div className=" hidden transition-transform duration-300 ease-in-out absolute bottom-0 left-0 w-full translate-y-12 group-hover:translate-y-[-70px] sm:flex items-center">
        <button className="cursor-pointer w-[40px] ml-auto mr-auto bg-[#FFFF] p-[5px] rounded">
          <HeartOutlined className="text-2xl text-[#3D3D3D]" />
        </button>
        <button className="cursor-pointer w-[40px] ml-auto mr-auto bg-[#FFFF] p-[5px] rounded">
          <ShoppingCartOutlined className="text-2xl text-[#3D3D3D]" />
        </button>
        <button className="cursor-pointer w-[40px] ml-auto mr-auto bg-[#FFFF] p-[5px] rounded">
          <SearchOutlined className="text-2xl text-[#3D3D3D]" />
        </button>
      </div>
    </div>
  );
}
