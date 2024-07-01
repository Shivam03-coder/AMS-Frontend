import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import { IoEyeOutline } from "react-icons/io5";
import { LoginSchema } from "../../validations/LoginSchema.js";
import { useState } from "react";
import Emailverification from "../emailverification/Emailverification";

const initialValues = {
  email: "",
  password: "",
  check: "",
};

function LoginForm() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 w-80 max-w-screen-lg sm:w-96 p-8 rounded-xl mb-7 z-30 bg-primary shadow-inner "
    >
      <div className="mb-1 flex flex-col gap-4 space-y-3 ">
        <div className="space-y-2">
          <Input
            className="font-Varela text-secondary-prime"
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
            className="font-Varela text-secondary-prime"
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
      <Typography
        as={"button"}
        variant="paragraph"
        className="text-secondary-main hover:underline text-[15px] font-normal mx-2"
      >
        forgotten password ?
      </Typography>
      <Checkbox
        onChange={handleChange}
        color="blue"
        name="check"
        value={values.check}
        label={
          <Typography
            variant="small"
            color="gray"
            className="flex items-center font-normal"
          >
            I agree the
            <a
              href="#"
              className="font-medium transition-colors hover:text-gray-900"
            >
              &nbsp;Terms and Conditions
            </a>
          </Typography>
        }
        containerProps={{ className: "-ml-2.5" }}
      />
      <Button
        type="submit"
        onClick={handleOpen}
        className="mt-6 bg-secondary-prime text-xl"
        fullWidth
      >
        Login
      </Button>
      {<Emailverification setOpen={setOpen} open={open} />}
    </form>
  );
}

export default LoginForm;
