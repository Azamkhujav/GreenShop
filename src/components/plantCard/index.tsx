import Image14 from '../../assets/icons/flower7.png'
import { PlantCard as PlantCardType} from '../../types';
export default function PlantCard(prop:{cardItem:PlantCardType}) {
  const {cardItem}=prop
  return (
    <div className="flex items-center  bg-gray-100 py-[40px] px-[30px] rounded-lg shadow-md max-w-[586px] relative">
      <div className="w-1/3">
        <img
          src={cardItem?.img}
          alt="Plant"
          className="absolute bottom-0 left-0 w-[200px] sm:w-[287px] object-contain"
        />
      </div>
      <div className="w-2/3 pl-6 flex flex-col items-end" >
        <h2 className="text-gray-800 font-bold text-lg mb-2 text-end">
          {cardItem?.title}
        </h2>
        <p className="text-gray-600 mb-4 text-end">
        {cardItem?.text}
        </p>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
          Find More →
        </button>
      </div>
    </div>
  );
};
