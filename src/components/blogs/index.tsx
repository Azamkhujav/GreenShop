import BlogCards from "./BlogCards";
import { blogCards } from "../../assets/db";
export default function Blogs() {
    return(
        <div className="mb-[120px]">
            <h2 className="font-bold text-[30px] leading-[16px] text-[#3D3D3D] text-center mb-[20px]" >Our Blog Posts</h2>
            <p className="font-normal text-[14px] leading-[24px] text-[#727272] text-center mb-[30px]" >We are an online plant shop offering a wide range of cheap and trendy plants. </p>
            <div className="flex items-center justify-evenly lg:justify-between md:justify-evenly sm:justify-evenly flex-wrap gap-[30px]" >
                {
                    blogCards?.map((elem)=>(
                        <BlogCards key={elem?.id} cardItem={elem} />
                    ))
                }
            </div>
        </div>
    )
    
}