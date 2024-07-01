import {
    Card,
  CardBody,
  } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Barchartconfig } from "./Barchartconfig";

  function Barchart() {
    return (
      <Card className="rounded-xl shadow-none bg-tertiary-prime">

        <CardBody className="px-2 pb-0">
          <Chart {...Barchartconfig} />
        </CardBody>
      </Card>
    );
  }
export default Barchart
