
function FooterSvg() {
  return (
    <svg
      width="100%"
      height="10%"
      id="svg"
      viewBox="0 0 1440 325"
          className="transition duration-300 ease-in-out delay-150"
          opacity={0.1}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stopColor="#006989"></stop>
          <stop offset="95%" stopColor="#0c1844"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,400 L 0,100 C 115.48325358851676,86.79425837320574 230.96650717703352,73.58851674641149 338,80 C 445.0334928229665,86.41148325358851 543.6172248803828,112.44019138755979 629,151 C 714.3827751196172,189.5598086124402 786.5645933014354,240.6507177033493 860,266 C 933.4354066985646,291.3492822966507 1008.1244019138755,290.9569377990431 1105,309 C 1201.8755980861245,327.0430622009569 1320.9377990430621,363.52153110047846 1440,400 L 1440,400 L 0,400 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="0.53"
        className="transition-all duration-300 ease-in-out delay-150 path-0"
      ></path>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stopColor="#006989"></stop>
          <stop offset="95%" stopColor="#0c1844"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,400 L 0,233 C 107.11004784688996,229.08612440191388 214.2200956937799,225.17224880382776 319,244 C 423.7799043062201,262.82775119617224 526.2296650717703,304.3971291866029 619,329 C 711.7703349282297,353.6028708133971 794.8612440191388,361.2392344497608 885,383 C 975.1387559808612,404.7607655502392 1072.3253588516745,440.64593301435406 1166,468 C 1259.6746411483255,495.35406698564594 1349.8373205741627,514.1770334928229 1440,533 L 1440,400 L 0,400 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="0.5"
        className="transition-all duration-300 ease-in-out delay-150 path-1"
      ></path>
    </svg>
  );
}

export default FooterSvg;
