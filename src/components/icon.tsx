import React from "react";
import { Icon as Iconify } from "@iconify/react";
import { cn } from "@/lib/utils";

type IconProps = {
  icon: string;
  onClick?: () => void;
  btnClass?: string;
  iconClass?: string;
  children?: React.ReactNode;
};

export default function Icon({
  icon = "",
  onClick,
  btnClass,
  iconClass,
  children,
}: IconProps) {
  return (
    <span onClick={onClick} className={cn("rounded-md", btnClass)}>
      <Iconify icon={icon} className={cn("size-8 m-2", iconClass)} />
      {children}
    </span>
  );
}