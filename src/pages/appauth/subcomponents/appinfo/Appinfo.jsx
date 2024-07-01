import { Typography } from "@material-tailwind/react";
import { APPINFODATA } from "./appinfodata";

function Appinfo() {
  return (
    <section className="grid grid-rows-4 place-content-center place-items-start md:place-self-stretch p-9">
      {APPINFODATA.map((info, index) => {
        const Iconcomponets = info.icons;
        return (
          <div key={info.id} className="text-primary Row-center py-7 z-50 gap-5">
            <Typography as={"div"}>
              <Iconcomponets
                className="bg-tertiary-main size-[80px] md:size-[100px] rounded-xl p-5  "
              />
            </Typography>
            <Typography as={"div"}>
              <Typography className="font-Varela" as={"title"} variant="h4">
                {info.title}
              </Typography>
              <Typography
                variant={"h4"}
                className="ShowOndesktopOnly text-lg font-Roboto font-normal opacity-90 Showdesktoponly"
              >
                {info.text}
              </Typography>
            </Typography>
          </div>
        );
      })}
    </section>
  );
}

export default Appinfo;
