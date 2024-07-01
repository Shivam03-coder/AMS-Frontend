import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { SOCIALICONS } from "../icons/Socialicons";

function Developercard() {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        {SOCIALICONS.map((icons) => {
          const Iconscomponets = icons.components;
          return (
            <Tooltip key={icons.id} content="Follow">
              <Typography
                as="a"
                href={icons.socialLink}
                variant="lead"
                color={icons.colors}
                textGradient
              >
                <Iconscomponets />
              </Typography>
            </Tooltip>
          );
        })}
      </CardFooter>
    </Card>
  );
}
export default Developercard;
