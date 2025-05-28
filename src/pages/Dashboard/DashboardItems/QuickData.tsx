interface IQuickData {
  imgIcon: string;
  quickData: number;
  name: string;
}

export default function QuickData({ imgIcon, quickData, name }: IQuickData) {
  return (
    <div className="flex gap-3 items-center px-4 py-5 bg-white w-[200px] rounded-xl shadow-2xl">
      <div className="h-14 w-14">
        <img src={imgIcon} alt="quick-icon" className="object-cover" />
      </div>
      <div className="space-y-2 flex-1">
        <div className="font-bold text-2xl">{quickData}</div>
        <div title={name} className="text-sm font-light text-nowrap">
          {name}
        </div>
      </div>
    </div>
  );
}
