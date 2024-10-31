import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import mainBannerright from "../../assets/icons/mainbanner.png";
import mainBannerrightMob from "../../assets/icons/mobPlant.png";

export default function Slider() {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper mt-[20px] mb-[40px] bg-[#F5F5F580] sm:h-auto h-[200px] sm:rounded-none rounded-[30px]"
    >
      <SwiperSlide>
        <div className="w-full flex  md:flex-row justify-between items-center px-4 md:px-12 lg:px-20">
          <div className="w-full md:w-1/2 mb-5 md:mb-0">
            <p className="text-[11px] md:text-base text-[#3D3D3D] leading-5 font-medium mb-0 sm:mb-2 md:mb-4">
              Welcome to GreenShop
            </p>
            <h1 className="font-black text-[24px] md:text-5xl lg:text-6xl leading-tight md:leading-tight text-[#3D3D3D] mb-0 sm:mb-3 md:mb-6">
              LET'S MAKE A BETTER <span className="text-[#46A358]">PLANET</span>
            </h1>
            <p className="text-[#727272] text-sm md:text-base leading-6 md:leading-7 font-normal sm:block hidden">
              We are an online plant shop offering a wide range of cheap and trendy plants.
              Use our plants to create a unique Urban Jungle. Order your favorite plants!
            </p>
            <p className="text-[#727272] text-sm md:text-base leading-6 md:leading-7 font-normal sm:hidden block">
            We are an online plant shop offering a wide range 
            </p>
          </div>
          <img className="sm:block hidden h-[213px]  sm:h-[300px] md:h-[400px] lg:h-[450px] object-contain" src={mainBannerright} alt="Banner" />
          <img className="sm:hidden block" src={mainBannerrightMob} alt="Banner" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex  md:flex-row justify-between items-center px-4 md:px-12 lg:px-20">
          <div className="w-full md:w-1/2 mb-5 md:mb-0">
            <p className="text-[11px] md:text-base text-[#3D3D3D] leading-5 font-medium mb-0 sm:mb-2 md:mb-4">
              Welcome to GreenShop
            </p>
            <h1 className="font-black text-[24px] md:text-5xl lg:text-6xl leading-tight md:leading-tight text-[#3D3D3D] mb-0 sm:mb-3 md:mb-6">
              LET'S MAKE A BETTER <span className="text-[#46A358]">PLANET</span>
            </h1>
            <p className="text-[#727272] text-sm md:text-base leading-6 md:leading-7 font-normal sm:block hidden">
              We are an online plant shop offering a wide range of cheap and trendy plants.
              Use our plants to create a unique Urban Jungle. Order your favorite plants!
            </p>
            <p className="text-[#727272] text-sm md:text-base leading-6 md:leading-7 font-normal sm:hidden block">
            We are an online plant shop offering a wide range 
            </p>
          </div>
          <img className="h-[213px]  sm:h-[300px] md:h-[400px] lg:h-[450px] object-contain" src={mainBannerright} alt="Banner" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex  md:flex-row justify-between items-center px-4 md:px-12 lg:px-20">
          <div className="w-full md:w-1/2 mb-5 md:mb-0">
            <p className="text-[11px] md:text-base text-[#3D3D3D] leading-5 font-medium mb-0 sm:mb-2 md:mb-4">
              Welcome to GreenShop
            </p>
            <h1 className="font-black text-[24px] md:text-5xl lg:text-6xl leading-tight md:leading-tight text-[#3D3D3D] mb-0 sm:mb-3 md:mb-6">
              LET'S MAKE A BETTER <span className="text-[#46A358]">PLANET</span>
            </h1>
            <p className="text-[#727272] text-sm md:text-base leading-6 md:leading-7 font-normal sm:block hidden">
              We are an online plant shop offering a wide range of cheap and trendy plants.
              Use our plants to create a unique Urban Jungle. Order your favorite plants!
            </p>
            <p className="text-[#727272] text-sm md:text-base leading-6 md:leading-7 font-normal sm:hidden block">
            We are an online plant shop offering a wide range 
            </p>
          </div>
          <img className="h-[213px]  sm:h-[300px] md:h-[400px] lg:h-[450px] object-contain" src={mainBannerright} alt="Banner" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
