interface ActivitesProps {
  title: string;
  description: string;
  time: string;
}

const Activites = ({ title, description, time }: ActivitesProps) => {
  return (
    <div className="border-b border-gray-200 ">
      <p>{title}</p>
      <div className="flex justify-between items-center text-sm text-gray-500 ">
        <p>{description}</p>
        <p>{time} minutes ago</p>
      </div>
    </div>
  );
};

export default Activites;
