import { IconButton, Typography } from "@material-tailwind/react";
import { SiTicktick } from "react-icons/si";

function Attendence({ icon: Icon, label, value, color }) {
  return (
    <>
      <div className=" bg-primary h-[180px] Col-center p-3 rounded-xl hover:rounded-none transition-all text-center space-y-2 ">
        <IconButton className="bg-tertiary-prime shadow-none">
          <Icon size={20}  style={{ color }} />
        </IconButton>
        <Typography
          className="text-secondary-prime font-semibold font-Poppins"
          variant="small"
        >
          {label}
        </Typography>
        <Typography className="text-secondary-prime" variant="h5">
          {value}
        </Typography>
      </div>
    </>
  );
}

export default Attendence;
