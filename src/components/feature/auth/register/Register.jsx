import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { IoEyeOutline } from "react-icons/io5";
import RegisterForm from "./RegisterForm";

function Register() {
  return (
    <Card className="mx-auto Row-center" color="transparent" shadow={false}>
      <RegisterForm />
    </Card>
  );
}

export default Register;
