import React from "react";
import Accordionlist from "../../../components/shared/accordion/Accordionlist";
import Accordimage from "../../../assets/images/svg/Accord.svg";

function Accordioncontent() {
  return (
    <>
      <section className="order-2 md:order-1">
        <figure>
          <img
            className=" size-[400px] md:size-[500px]"
            src={Accordimage}
            alt=""
          />
        </figure>
      </section>
      <section className="order-1 md:order-2">
        <div className="Accordion mx-auto">
          <Accordionlist />
        </div>
      </section>
    </>
  );
}

export default Accordioncontent;
