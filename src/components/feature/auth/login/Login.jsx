import {
  Card,
} from "@material-tailwind/react";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <Card className="mx-auto Row-center" color="transparent" shadow={false}>
      <LoginForm />
    </Card>
  );
}

export default Login;
