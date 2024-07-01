import { Typography } from "@material-tailwind/react";

const Navlist = () => {
  return (
    <>
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
        <Typography
          as="li"
          variant="h5"
          className="p-1 font-Roboto font-medium"
        >
          <a href="/" className="Navlink">
            Dashboard
          </a>
        </Typography>
        <Typography
          as="li"
          variant="h5"
          className="p-1 font-Roboto font-medium"
        >
          <a  className="Navlink">
            About
          </a>
        </Typography>
        <Typography
          as="li"
          variant="h5"
          className="p-1 font-Roboto font-medium"
        >
          <a className="Navlink">
            Chat-Room
          </a>
        </Typography>
        <Typography
          as="li"
          variant="h5"
          className="p-1 font-Roboto font-medium"
        >
          <a className="Navlink">
            Profile
          </a>
        </Typography>
      </ul>
    </>
  );
};

export default Navlist;
