import Location from "../../../assets/icons/Location";
import { Contact as ContactProps } from "../../../types";

export default function Contact(props: ContactProps) {
  const { title, icon } = props;
  return (
    <div className="flex items-center ">
      {icon}
      <p className="text-[14px] text-[#3D3D3D] ml-[10px] max-w-[176px]">
        {title}
      </p>
    </div>
  );
}
