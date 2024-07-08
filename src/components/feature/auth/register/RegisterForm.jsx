import { Input, Button, Typography, Spinner } from "@material-tailwind/react";
import { useFormik } from "formik";
import { IoEyeOutline } from "react-icons/io5";
import { RegisterSchema } from "../../validations/RegisterSchema";
import { useRegisterUserMutation } from "../../../../app/api/userapi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUsercredentials } from "../../../../app/slices/userslice";
const initialValues = {
  fullname: "",
  phonenumber: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const [RegisterUser, { isLoading }] = useRegisterUserMutation();

  const dispatch = useDispatch();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: RegisterSchema,
    onSubmit: async (userinfo, action) => {
      try {
        const resp = await RegisterUser(userinfo);

        if (resp.data && resp.data?.status === "success") {
          toast.success(resp.data.message);
          dispatch(setUsercredentials(resp.data.user));
          action.resetForm();
        }
        if (resp.error && resp.error.data?.status === "failed") {
          toast.error(resp.error.data.message);
        }
      } catch (error) {
        console.log("error:", error);
      }
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 w-80 max-w-screen-lg sm:w-96 p-8 rounded-xl mb-7 z-30 bg-primary shadow-inner"
    >
      <div className="mb-1 flex flex-col gap-4 space-y-3 ">
        <div className="space-y-2">
          <Input
            className="font-Varela  text-lg text-secondary-prime"
            variant="outlined"
            label="Your name"
            placeholder="Fullname"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
          />
          <p className="text-[0.9rem] mx-1 font-Roboto text-deep-orange-800">
            {errors?.fullname}
          </p>
        </div>
        <div className="space-y-2">
          <Input
            className="font-Varela"
            variant="outlined"
            label="Number"
            placeholder="+91"
            name="phonenumber"
            value={values.phonenumber}
            onChange={handleChange}
          />

          <p className="text-[0.9rem] mx-1 font-Roboto text-deep-orange-800">
            {errors?.phonenumber}
          </p>
        </div>
        <div className="space-y-2">
          <Input
            className="font-Varela"
            variant="outlined"
            label="Email"
            placeholder="******@gmail.com"
            name="email"
            value={values.email}
            onChange={handleChange}
          />

          <p className="text-[0.9rem] mx-1 font-Roboto text-deep-orange-800">
            {errors?.email}
          </p>
        </div>
        <div className="space-y-2">
          <Input
            className="font-Varela"
            variant="outlined"
            label="Password"
            placeholder="**********"
            name="password"
            icon={<IoEyeOutline />}
            value={values.password}
            onChange={handleChange}
          />
          <p className="text-[0.9rem] mx-1 font-Roboto text-deep-orange-800">
            {errors?.password}
          </p>
        </div>
      </div>
      <Button
        type="submit"
        className="mt-6 bg-secondary-prime Row-center text-xl"
        fullWidth
      >
        {isLoading ? (
          <Spinner
            className="size-8 mx-auto bg-transparent"
            color="deep-orange"
          />
        ) : (
          "REGISTER"
        )}
      </Button>
      <Typography color="gray" className="mt-4  font-normal">
        Already have an account?{" "}
        <a href="#" className="font-medium text-gray-900">
          Log In
        </a>
      </Typography>
    </form>
  );
};

export default RegisterForm;
