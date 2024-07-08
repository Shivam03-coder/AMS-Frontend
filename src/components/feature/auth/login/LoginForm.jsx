import {
  Input,
  Checkbox,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { IoEyeOutline } from "react-icons/io5";
import { LoginSchema } from "../../validations/LoginSchema.js";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../../../app/api/userapi.js";
import { toast } from "react-toastify";
import Cookie from "js-cookie";
import { useSelector } from "react-redux";

const initialValues = {
  email: "",
  password: "",
  check: "",
};

function LoginForm() {
  const [LoginUser, { isLoading }] = useLoginUserMutation();

  const Navigate = useNavigate();

  const { _id } = useSelector(({ user }) => user.registerd_User_info);

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (userlogincred, action) => {
      try {
        if (userlogincred.check !== true) {
          return toast.error("Please accept terms and conditions");
        }

        const resp = await LoginUser(userlogincred);

        if (resp.data && resp.data.status === "success") {
          toast.success(resp.data.message);
          action.resetForm();

          const isAuthenticated = Cookie.get("isUserAuthentucated");

          if (isAuthenticated) {
            Navigate(`/ams/student-dashboard/:${_id}`);
          }
        }

        if (resp.error.data && resp.error.data.status === "failed") {
          toast.error(resp.error.data.message);
        }
      } catch (error) {
        console.log("ERROR", error);
      }
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
        onClick={() => Navigate("/ams/password-reset")}
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
        className="mt-6 bg-secondary-prime text-xl"
        fullWidth
      >
        {isLoading ? (
          <Spinner
            className="size-8 mx-auto bg-transparent"
            color="deep-orange"
          />
        ) : (
          "LOGIN"
        )}
      </Button>
    </form>
  );
}

export default LoginForm;
