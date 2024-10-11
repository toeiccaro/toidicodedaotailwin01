import { ReactNode } from "react";

export interface JobProps {
    title: string;
    icon: ReactNode;
    bgClass: string;
}

export const Job: React.FC<JobProps> = ({title, icon, bgClass: bgColor} : JobProps)  => {
    return (
        <div className={`${bgColor} p-4 flex flex-col justify-center items-center aspect-square rounded-lg`}>
            {icon}
        <p className="pt-0">{title}</p>
      </div>
    )
}