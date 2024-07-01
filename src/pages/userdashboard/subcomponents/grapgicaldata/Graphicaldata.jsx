import React from "react";
import Barchart from "../../../../components/shared/charts/barcharts/Barchart";
import Linechart from "../../../../components/shared/charts/linecharts/Linechart";
import Academicinfo from "../Academicinfo";

function Graphicaldata() {
  return (
    <div className="grid grid-cols-3 p-3 gap-4">
      <Barchart />
      <Linechart />
      <Academicinfo />
    </div>
  );
}

export default Graphicaldata;
