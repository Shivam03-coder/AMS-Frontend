import React from "react";
import Passwordresetform from "../../components/feature/password-reset/Passwordresetform";
import Lightray from "../../components/shared/svgs/Lightray";

const Passwordresetpage = () => {
  return (
    <div className="min-h-screen w-screen relative">
      <Lightray />
      <div className="Col-center h-screen">
        <Passwordresetform />
      </div>
    </div>
  );
};

export default Passwordresetpage;
