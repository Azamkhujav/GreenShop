import { Button, Tabs } from "antd";

type Item = {
  label: string;
  key: string;
};
interface IProp {
  items: Item[];
}
export default function Tab(prop: IProp) {
  const { items } = prop;
  return (
    <Tabs
      className="[&_.ant-tabs-tab-active_.ant-tabs-tab-btn]:!text-[#46A358] [&_.ant-tabs-nav]:before:border-0 [&_.ant-tabs-ink-bar]:bg-[#46A358] [&_.ant-tabs-tab]:hover:text-black [&_.ant-tabs-tab-btn]:font-cera font-normal text-[15px] mb-0 lg:mb-[30px]"
      items={items}
    />
  );
}
