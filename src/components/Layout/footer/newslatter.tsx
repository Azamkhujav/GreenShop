import { Input, Button } from 'antd';
export default function Newsletter() {
  return (
    <div className="flex flex-col items-start rounded-lg max-w-[354px] pr-[18px]">
      <h4 className="font-semibold text-[18px] mb-4">Would you like to join newsletters?</h4>
      <div className="flex w-full mb-[20px]">
        <Input
          placeholder="Enter your email address..."
          className="flex-1 h-[40px]"
          style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
        />
        <Button
          type="primary"
          style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 ,backgroundColor:'#46A358'}}
          className='h-[40px]'
        >
          Join
        </Button>
      </div>
      <p className="text-[13px] text-[#727272]">
        We usually post offers and challenges in our newsletter. We’re your online houseplant
        destination, offering a wide range of plants and accessories!
      </p>
    </div>
  );
};


