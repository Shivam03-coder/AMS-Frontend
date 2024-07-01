import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Apploading = () => {
  return (
    <div className="w-screen h-screen Col-center bg-primary">
      <CirclesWithBar
        height="170"
        width="170"
        color="#0C1844"
        outerCircleColor="#0C1844"
        innerCircleColor="#006989"
        barColor="#0C1844"
        ariaLabel="circles-with-bar-Apploading"
        wrapperStyle={{}}
        wrapperclassName=""
        visible={true}
      />
    </div>
  );
};

export default Apploading;
