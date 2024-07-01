import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm() {
  const Navigate = useNavigate();

  function Navigatetodashboard() {
    toast.success("Login successfull");
    Navigate("/ams/student-dashboard/:id");
  }

  return (
    <form className="mt-8 w-80 max-w-screen-lg sm:w-96 p-8 rounded-xl mb-7 z-30 bg-primary shadow-inner">
      <div className="mb-1 flex flex-col gap-6 space-y-5 ">
        <Input
          className="font-Varela  text-lg text-secondary-prime"
          variant="outlined"
          label="Your name"
          placeholder="Fullname"
        />
        <Input
          className="font-Varela"
          variant="outlined"
          label="Number"
          placeholder="+91"
        />
        <Input
          className="font-Varela"
          variant="outlined"
          label="Email"
          placeholder="******@gmail.com"
        />
        <Input
          className="font-Varela"
          variant="outlined"
          label="Password"
          placeholder="**********"
          icon={<IoEyeOutline />}
        />
      </div>
      <Checkbox
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
        onClick={Navigatetodashboard}
        className="mt-6 bg-secondary-prime text-xl"
        fullWidth
      >
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
