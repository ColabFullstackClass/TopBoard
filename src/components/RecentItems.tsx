interface RecentProps {
  title: string;
  description: string;
  time: string;
}

const RecentItem = ({ title, description, time }: RecentProps) => {
  return (
    <div className="w-full border border-gray-500 rounded py-3 px-2">
      <p className="font-extrabold">
        {title} :<span className="text-sm font-normal"> {description}  </span>
        
       <p className="text-sm font-normal">{time}</p>
      </p>
    
    </div>
  );
};

export default RecentItem;
