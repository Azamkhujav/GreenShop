import { CardProps } from "../../../types";

export default function FooterCard(prop: CardProps) {
  const { iconUrl, title, description } = prop;
  return (
    <div className="sm:w-[204px] w-full  rounded-lg">
      <img className="w-[74px] mb-[10px]" src={iconUrl} alt={title} />
      <h3 className="text-[17px] font-semibold mb-[10px]">{title}</h3>
      <p className="text-[14px] text-[#727272]">{description}</p>
    </div>
  );
}
