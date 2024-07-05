import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { OtpSchema } from "../../validations/OtpSchema.js";

function Emailverificationform({ open, setOpen }) {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: { otp: "" },
    validationSchema: OtpSchema,
    onSubmit: async (value) => {
      value;
    },
  });

  function handlesubmit() {
    setOpen(!open);
  }

  return (
    <form className="Col-center" onSubmit={handleSubmit}>
      <DialogBody>
        <Typography className="mb-7 -mt-7 text-xl  font-Varela text-secondary-prime font-medium ">
          OTP has been sent to your registered emial.
        </Typography>
        <div className="grid gap-6">
          <Input
            className="text-xl placeholder:text-secondary-prime placeholder:opacity-70  font-semibold text-secondary-prime"
            variant="static"
            placeholder="OTP"
            name="otp"
            value={values.otp}
            onChange={handleChange}
          />
        </div>
      </DialogBody>
      <DialogFooter className="space-x-2">
        <Button onClick={handlesubmit} variant="text" color="gray">
          CANCEL
        </Button>
        <Button onClick={handlesubmit} className="bg-tertiary-main">
          CONFIRM
        </Button>
      </DialogFooter>
    </form>
  );
}
export default Emailverificationform;
