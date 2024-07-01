import { IoIosWarning } from "react-icons/io";
import { SiTicktick } from "react-icons/si";
import { FaUmbrellaBeach } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

export const Attendencedata = [
  {
    id: 1,
    Icon: SiTicktick,
    label: "Attended",
    colors:"blue",
    value: "18",
  },
  {
    id: 2,
    Icon: IoIosWarning,
    label: "Missed",
    colors:"red",
    value: "6",
  },
  {
    id: 3,
    Icon: FaUmbrellaBeach,
    label: "On leave",
    colors:"green",
    value: "0",
  },
  {
    id: 4,
    Icon: SlCalender,
    label: "Weekly off",
    colors:"black",
    value: "6",
  },
  {
    id: 5,
    Icon: IoLogOutOutline,
    label: "Log out",
    colors:"purple",
    value: "18",
  },
];
