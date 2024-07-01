import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Navlist from "./Navlist";
import { useState, useEffect } from "react";
import CubeSvg from "../../shared/svgs/CubeSvg";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const Naviagate = useNavigate();

  function handleNavView() {
    setOpenNav(!openNav);
  }

  function ChangeToauthpage() {
    Naviagate("/ams/register");
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <nav>
      <Navbar className="h-max md:w-11/12 bg-glassy backdrop-blur-2xl rounded-none md:rounded-xl mx-auto md:mt-5 px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-secondary-prime">
          <div className="Row-center gap-3">
            <CubeSvg />
            <Typography
              as="h2"
              className="mr-4 cursor-pointer py-1.5 font-bold font-Roboto text-3xl"
            >
              AMS
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <Navlist />
            </div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="lg"
                className="hidden font-Poppins font-medium text-base lg:inline-block"
              >
                <span>LOG-IN</span>
              </Button>
              <Button
                onClick={ChangeToauthpage}
                className="hidden bg-secondary-prime font-Poppins font-medium text-base lg:inline-block"
              >
                REGISTER
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={handleNavView}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <Navlist />
          <div className="flex items-center gap-x-1">
            <Button
              fullWidth
              variant="text"
              size="sm"
              className="bg-secondary-prime text-primary font-Poppins font-medium text-base"
            >
              <span>LOG-IN</span>
            </Button>
            <Button
              onClick={ChangeToauthpage}
              className="bg-secondary-prime font-Poppins font-medium text-base"
            >
              REGISTER
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </nav>
  );
}

export default Nav;
