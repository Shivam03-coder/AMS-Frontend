import Attendenceimage from "../../../assets/images/svg/Attend.svg";
import DumbleSvg from "../../../components/shared/svgs/DumbleSvg";
import { Typography } from "@material-tailwind/react";

const Maincontent = () => {
  return (
    <>
      <section className="relative w-full mt-7">
        <div className="Dumblesvg Row-center">
          <DumbleSvg />
        </div>
        <div className="Overlay-center">
          <Typography
            as={"h2"}
            className="font-Roboto text-4xl md:text-4xl font-bold py-5 space-y-4"
          >
            <span className=" text-4xl md:text-5xl text-secondary-main font-Varela">
              ATTENDENCE
            </span>{" "}
            <br /> <span className="text-secondary-main">M</span>ANAGEMENT{" "}
            <br /> <span className="text-secondary-main">S</span>YSTEM .....
          </Typography>
        </div>
      </section>
      <section className="md:pt-16">
        <figure>
          <img
            className="size-[300px]"
            src={Attendenceimage}
            alt=""
          />
        </figure>
      </section>
    </>
  );
};

export default Maincontent;
