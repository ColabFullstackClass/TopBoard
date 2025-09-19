import { PiDotsThreeVertical } from "react-icons/pi";

interface TableDataProps {
  num: number;
  topic: string;
}

const TableData = ({ num, topic }: TableDataProps) => {
  return (
    <div className="flex justify-between py-3 px-5 border-b border-gray-300 text-gray-600">
      <div className="flex">
        <p>{num}</p>
        <p className="pl-20">{topic}</p>
      </div>
      <button className="hover:text-gray-600">
        <PiDotsThreeVertical className="h-6 w-6" />
      </button>
    </div>
  );
};

export default TableData;
