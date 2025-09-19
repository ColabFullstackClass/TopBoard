interface StatsCardProps {
  title: string;
  des: string;
}

const StatsCard = ({ title, des }: StatsCardProps) => {
  return (
    <div className="bg-gray-100 rounded-2xl px-11 py-4 flex flex-col items-center justify-center shadow-sm">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <p className="text-gray-500">{des}</p>
    </div>
  );
};

export default StatsCard;
