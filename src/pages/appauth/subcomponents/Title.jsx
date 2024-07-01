import { Avatar, Typography } from "@material-tailwind/react";
import profile from "../../../assets/images/png/profile.png";

const Title = ({ msg }) => {
  return (
    <section className="Col-center gap-4">
      <Typography
        className="text-secondary-prime font-Varela font-extrabold text-center mt-8"
        variant="h2"
      >
        AMS USER {msg}
      </Typography>
      <Avatar className="z-30" size="xxl" variant="square" aria-pressed src={profile} />
    </section>
  );
};

export default Title;
