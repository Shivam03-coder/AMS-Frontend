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

function Emailverification({ open, setOpen }) {
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
    <>
      <Dialog open={open} size="xs">
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-center">
            {" "}
            <Typography
              className="mb-1 text-secondary-prime font-Poppins"
              variant="h4"
            >
            AMS-Email-Verification
            </Typography>
          </DialogHeader>
        </div>
        <form onSubmit={handleSubmit}>
          <DialogBody>
            <Typography className="mb-10 -mt-7 text-xl font-Varela text-secondary-prime font-medium ">
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
              cancel
            </Button>
            <Button onClick={handlesubmit} className="bg-tertiary-main">
              CONFIRM
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
export default Emailverification;
