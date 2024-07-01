import React from "react";

const CubeSvg = () => {
  return (
    <svg className="animate-spin-slow duration-[5000]" width="60" height="60" viewBox="0 0 512 512">
      <path
        d="m256.002 242.913 210.412-121.43L256.002 0 45.586 121.483zm-15.053 26.073L30.534 147.557v242.96L240.949 512zm30.107 0V512l210.41-121.483v-242.96z"
        fill="rgba(38, 53, 93, 1)"
      ></path>
    </svg>
  );
};

export default CubeSvg;
