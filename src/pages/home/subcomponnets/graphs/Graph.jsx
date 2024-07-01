import {
  Card,
  CardBody,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Graphconfig } from "./Graphconfig";

function Graph() {
  return (
    <Card className="rounded-none shadow-none">
      <CardBody className="px-2 pb-0">
        <Chart {...Graphconfig} />
      </CardBody>
    </Card>
  );
}

export default Graph;
