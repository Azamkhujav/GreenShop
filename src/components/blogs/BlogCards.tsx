import blog1 from "../../assets/icons/blog1.png";
import { BlogCard } from "../../types";
export default function BlogCards(prop:{cardItem:BlogCard}) {
    const {cardItem} = prop
  return (
    <div className="max-w-[268px] bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={cardItem?.img}
        alt={cardItem?.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-[#46A358] text-sm ">
          {cardItem?.date}
        </p>
        <h2 className="text-[#3D3D3D] font-bold text-[20px] ">
          {cardItem?.text}
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          {cardItem?.text}
        </p>
        <a
          href="#"
          className="text-[#46A358] font-semibold hover:underline inline-flex items-center"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}
