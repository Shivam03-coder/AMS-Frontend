import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import Chart from "react-apexcharts";
 import {Piechartconfig} from "./Piechartconfig"
  
  function Piechart() {
    return (
      <Card className="shadow-none rounded-2xl bg-tertiary-prime">
          <Typography className="text-secondary-prime font-Varela mt-5 mx-5 -mb-8" variant="h5">
            Statics
          </Typography>
        <CardBody className="mt-4 grid place-items-center ">
          <Chart {...Piechartconfig} />
        </CardBody>
      </Card>
    );
  }
  
export default Piechart
