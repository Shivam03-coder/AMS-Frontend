import { Card, Typography, CardBody } from "@material-tailwind/react";
import React from "react";

function Academicinfo() {
  return (
    <Card className="shadow-none rounded-2xl bg-tertiary-prime">
      <Typography
        className="text-secondary-prime text-center font-Varela mt-5 mx-5 -mb-8"
        variant="h5"
      >
        Academics 2023-2024
      </Typography>
      <CardBody className="mt-4 grid grid-cols-1 place-items-center gap-2 h-full ">
        <div className="bg-primary w-full  Row-center gap-5 rounded-2xl p-3">
          <Typography className=" text-secondary-prime text-justify " variant="h6">
            TOTAL CLASSES
          </Typography>
          <Typography className="text-center text-tertiary-main" variant="h6">
            186 HOURS
          </Typography>
        </div>
        <div className="bg-primary w-full  Row-center gap-5 rounded-2xl p-3">
          <Typography className=" text-secondary-prime text-justify " variant="h6">
            TOTAL HOLIDAYS
          </Typography>
          <Typography className="text-center text-tertiary-main" variant="h6">
            40 DAYS
          </Typography>
        </div>
        <div className="bg-primary w-full  Row-center gap-5 rounded-2xl p-3">
          <Typography className=" text-secondary-prime text-justify " variant="h6">
            TOTAL SUNDAYS
          </Typography>
          <Typography className="text-center text-tertiary-main" variant="h6">
            72 DAYS
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

export default Academicinfo;
