import React from "react";
import Attendence from "./attendence/Attendence";
import { Attendencedata } from "./attendence/Attendencedata";
import Piechart from "../../../components/shared/charts/piecharts/Piechart";

function Statics() {
  return (
    <div className="h-full grid grid-cols-4 mx-3 gap-5">
      <div className="col-span-1">
        <Piechart />
      </div>
      <div className="col-span-3 grid grid-cols-5 place-content-center px-5 gap-2 bg-tertiary-prime rounded-2xl">
        {Attendencedata.map(({ id, Icon, value, label, colors }, index) => (
          <Attendence
            key={id}
            icon={Icon}
            label={label}
            value={value}
            color={colors}
          />
        ))}
      </div>
    </div>
  );
}

export default Statics;
