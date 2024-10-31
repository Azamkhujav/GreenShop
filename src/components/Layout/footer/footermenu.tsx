import FaceBook from "../../../assets/icons/Facebook";
import Instagram from "../../../assets/icons/Instagram";
import Linkedin from "../../../assets/icons/Linkedin";
import Twitter from "../../../assets/icons/Twitter";
import Union from "../../../assets/icons/Union";
import Image from '../../../assets/icons/image 16.png'
export default function FooterMenu() {
  return (
    <div className=" py-[18px] sm:mb-0 mb-[100px]">

      <div className="mx-auto px-6 flex justify-between text-gray-700 flex-wrap gap-[20px]">
        <div>
          
          <h4 className="font-semibold mb-2">My Account</h4>
          <ul>
            <li>My Account</li>
            <li>Our Stores</li>
            <li>Contact Us</li>
            <li>Career</li>
            <li>Specials</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Help & Guide</h4>
          <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Shipping & Delivery</li>
            <li>Product Policy</li>
            <li>How to Return</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Categories</h4>
          <ul>
            <li>House Plants</li>
            <li>Potter Plants</li>
            <li>Seeds</li>
            <li>Small Plants</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Social Media</h4>
          <div className="flex space-x-4 mb-4">
            <button className="p-[10px] border-[#46A35833] border-[1px] rounded">
              <FaceBook />
            </button>
            <button className="p-[10px] border-[#46A35833] border-[1px] rounded">
              <Instagram />
            </button>
            <button className="p-[10px] border-[#46A35833] border-[1px] rounded">
              <Twitter />
            </button>
            <button className="p-[10px] border-[#46A35833] border-[1px] rounded">
              <Linkedin />
            </button>
            <button className="p-[10px] border-[#46A35833] border-[1px] rounded">
              <Union />
            </button>
          </div>
          <h4 className="font-semibold mb-2">We accept</h4>
          <div className="flex space-x-2">
            <img src={Image} alt="accept" />
          </div>
        </div>
      </div>
    </div>
  );
}
