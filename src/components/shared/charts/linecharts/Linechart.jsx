import {
  Card,
  CardBody,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Linechartconfig } from "./Linechartconfig";

function Linechart() {
  return (
    <Card className="rounded-xl shadow-none bg-tertiary-prime">
      <CardBody className="px-2 pb-0">
        <Chart {...Linechartconfig} />
      </CardBody>
    </Card>
  );
}

export default Linechart;
