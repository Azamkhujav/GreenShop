import { contact, footerCards } from "../../../assets/db";
import Logo from "../../../assets/icons/Logo";
import Contact from "./contact";
import FooterCard from "./footerCard";
import FooterMenu from "./footermenu";
import Newsletter from "./newslatter";

export default function Footer() {
  return (
    <footer className="bg-[#FBFBFB]">
      <div className="flex items-end p-[18px] justify-between flex-wrap  gap-[20px]">
        {footerCards?.map((elem) => (
          <FooterCard
            key={elem?.id}
            description={elem?.description}
            title={elem?.title}
            iconUrl={elem?.iconUrl}
          />
        ))}
        <Newsletter />
      </div>
      <div className="flex items-center lg:gap-[100px] gap-[30px]  sm:justify-between p-[25px]  bg-[#46A3581A] flex-wrap">
        <Logo />
        {contact?.map((elem) => (
          <Contact key={elem?.id} icon={elem?.icon} title={elem?.title} />
        ))}
      </div>
      <FooterMenu />
    </footer>
  );
}
