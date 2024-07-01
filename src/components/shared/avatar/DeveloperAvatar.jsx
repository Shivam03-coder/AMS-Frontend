import { Avatar, Typography } from "@material-tailwind/react";
import Developerimage from "../../../assets/images/jpg/Developer.jpg"
function DeveloperAvatar() {
  return (
    <div className="Col-center">
      <Avatar
        src={Developerimage}
        alt="image"
        size="lg"
      />
      <Typography variant="h6" className="mt-4 text-center">
        Shivam Anand
      </Typography>
      <Typography color="gray" className="mb-4 text-center font-semibold text-secondary-prime font-Varela">
        Lead Developer
      </Typography>
    </div>
  );
}

export default DeveloperAvatar;
