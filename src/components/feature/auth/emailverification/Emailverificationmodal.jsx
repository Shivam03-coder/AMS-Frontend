import React from "react";
import {createPortal} from "react-dom";
import Emailverificationform from "./Emailverificationform.jsx";
import { Dialog, DialogHeader, Typography } from "@material-tailwind/react";

const Emailverificationmodal = ({ open, setOpen }) => {
  if (!open) {
    return null;
  }
  return createPortal(
    <Dialog open={open} size="xs">
      <div className="Col-center">
        <DialogHeader className="flex flex-col items-center">
          <Typography
            className="mb-1 text-secondary-prime font-Poppins"
            variant="h4"
          >
            AMS-Email-Verification
          </Typography>
        </DialogHeader>
        <Emailverificationform open={open} setOpen={setOpen} />
      </div>
    </Dialog>,
   document.getElementById('modal-root')
  );
};

export default Emailverificationmodal;
