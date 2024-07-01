import * as Yup from "yup";

export const OtpSchema = Yup.object({
  email: Yup.number().required("Otp is required"),
});
