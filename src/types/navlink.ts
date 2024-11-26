import { IconType } from "react-icons/lib";

export interface NavLink {
  name: string;
  longName: string;
  icon: IconType;
  href: string;
  iconColor: string;
}
