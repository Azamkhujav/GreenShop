import {
  HomeOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

export default function BottomNav() {
  return (
    <div className="sm:hidden  fixed bottom-0 left-0 right-0 px-6 py-4 bg-white rounded-t-3xl shadow-lg flex justify-between items-center">
      <HomeOutlined className="text-2xl text-green-500" />
      <HeartOutlined className="text-2xl text-gray-400" />
      <div className="w-16 h-16 bg-green-500 rounded-full flex justify-center items-center transform -translate-y-4 shadow-md">
        <AppstoreAddOutlined className="text-3xl text-white" />
      </div>
      <ShoppingCartOutlined className="text-2xl text-gray-400" />
      <UserOutlined className="text-2xl text-gray-400" />
    </div>
  );
}
