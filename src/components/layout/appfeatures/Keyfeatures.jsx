import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import { FiNavigation } from "react-icons/fi";
import { KeyfeaturesData } from "./KeyfeaturesData";

function Keyfeatures() {
  return (
    <section className=" w-[20rem] md:w-[25rem] md:mt-4">
      <Timeline>
        {KeyfeaturesData.map((items) => (
          <TimelineItem key={items.id} className="h-28">
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost" color="cyan">
                <FiNavigation className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h6" color="blue-gray">
                  {items.feature}
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem> 
        ))}
      </Timeline>
    </section>
  );
}

export default Keyfeatures;
