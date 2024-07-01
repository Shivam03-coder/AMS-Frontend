import { Typography } from "@material-tailwind/react";

function Assigmentsinfo() {
  return (
    <div className="grid grid-cols-6 place-items-center gap-4 m-3 p-4 rounded-xl bg-tertiary-prime">
      <Typography
        variant="h4"
        className="col-span-full font-Varela place-self-stretch"
      >
        ASSIGNMENTS
      </Typography>
      <div className="h-[100px] bg-primary Col-center rounded-xl hover:rounded-none transition-all">
      <Typography variant="h5" className="text-center font-Varela">APPLIED MATHEMATICS</Typography>
        <Typography variant="h4" className="text-secondary-main">12</Typography>
      </div>
      <div className="h-[100px] bg-primary Col-center rounded-xl hover:rounded-none transition-all">
        <Typography variant="h5" className="text-center font-Varela">ENGINEERING GRAPHICS</Typography>
        <Typography variant="h4" className="text-secondary-main">2</Typography>
      </div>
      <div className="h-[100px] bg-primary Col-center rounded-xl hover:rounded-none transition-all">
        <Typography variant="h5" className="text-center font-Varela">APPLIED PHYSICS</Typography>
        <Typography variant="h4" className="text-secondary-main">5</Typography>
      </div>
      <div className="h-[100px] bg-primary Col-center rounded-xl hover:rounded-none transition-all">
      <Typography variant="h5" className="text-center font-Varela">APPLIED MECHANICS</Typography>
        <Typography variant="h4" className="text-secondary-main">5</Typography>
      </div>
      <div className="h-[100px] bg-primary Col-center rounded-xl hover:rounded-none transition-all">
      <Typography variant="h5" className="text-center font-Varela">TECHNICAL ENGLISH</Typography>
        <Typography variant="h4" className="text-secondary-main">4</Typography>
      </div>
      <div className="h-[100px] bg-primary Col-center rounded-xl hover:rounded-none transition-all">
      <Typography variant="h5" className="text-center font-Varela">COMPUER PROGRAMING</Typography>
        <Typography variant="h4" className="text-secondary-main">3</Typography>
      </div>
    </div>
  );
}

export default Assigmentsinfo;
