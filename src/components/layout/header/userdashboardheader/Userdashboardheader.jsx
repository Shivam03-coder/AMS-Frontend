import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Profileview from "./profile/Profileview";
import { FiAlignCenter } from "react-icons/fi";

// profile menu component

function Userdashboardheader() {
  return (
    <Navbar className=" p-2 lg:pl-6 rounded-none border-none bg-primary shadow-none">
      <div className="relative mx-auto flex items-center justify-between text-secondary-prime">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 font-Roboto text-2xl font-bold cursor-pointer py-1.5"
        >
          <IconButton variant="text">
            <FiAlignCenter className="text-secondary-prime " size={30} />
          </IconButton>
          DASHBOARD
        </Typography>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          className="ml-auto mr-2 lg:hidden"
        >
          <FiAlignCenter className="h-6 w-6" />
        </IconButton>
        <Profileview />
      </div>
    </Navbar>
  );
}

export default Userdashboardheader;
