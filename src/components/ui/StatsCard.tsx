interface StatsCardProps {
    amount: number;
    description: string;
}
const StatsCard = ({ amount, description }: StatsCardProps) => {
    return (
        <div className="w-full bg-[#F4F4F4] border border-[#F4F4F4] rounded-[24px] p-[24px] flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center justify-center">
                <p className="text-[#303240] text-[32px] font-bold leading-[100%]">
                    {amount}
                </p>
                <p className="text-[#666979] font-normal text-[14px] leading-[100%]">{description}</p>
            </div>
        </div>
    );
};

export default StatsCard;
