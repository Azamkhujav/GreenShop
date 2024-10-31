import useHooks from "../../hooks/useHooks";
import { Category } from "../../types";
interface IProp {
  list: Category[];
  handleFilter: (option: { [key: string]: number }) => void;
  title:string,
  keyName:string
}
export default function List(prop: IProp) {
  const { list, handleFilter ,title,keyName} = prop;
  const { query } = useHooks();
  return (
    <div className="mb-[14px]">
      <h2 className="font-semibold text-[18px] mb-[10px] text-[#3D3D3D]">{title}</h2>
      <ul className="flex flex-col gap-[20px] pl-[10px] ">
        {list.map((category) => (
          <li
            onClick={() => handleFilter({[keyName]:category.count})}
            key={category.name}
            className={`flex justify-between cursor-pointer ${
              category.count == Number(query[keyName])
                ? "text-[#46A358] font-normal"
                : "text-[#3D3D3D]"
            }`}
          >
            <span>{category.name}</span>
            <span>({category.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
