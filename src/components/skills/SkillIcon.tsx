import { Icon } from '@iconify/react';

type Props = {
  src: string;
  name: string;
};

const SkillIcon = ({ src, name }: Props) => {
  return (
    <div className="group flex flex-col items-center gap-2 cursor-default select-none">
      <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-slate-700/60 to-slate-900 border border-slate-700/70 grid place-items-center shadow-md transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-accent group-hover:shadow-lg">
        <div className="absolute inset-0 rounded-2xl bg-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
        <Icon
          icon={src}
          width="30"
          height="30"
          className="relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
        />
      </div>
      <span className="text-[10px] font-mono text-slate-500 group-hover:text-accent transition-colors duration-200 capitalize text-center leading-tight max-w-[72px]">
        {name}
      </span>
    </div>
  );
};

export default SkillIcon;
