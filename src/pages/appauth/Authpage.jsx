import Login from "../../components/feature/auth/login/Login";
import Register from "../../components/feature/auth/register/Register";
import Appinfo from "./subcomponents/appinfo/Appinfo";
import Title from "./subcomponents/Title";
import BlobSvg from "../../components/shared/svgs/BlobSvg";
import SnowSvg from "../../components/shared/svgs/SnowSvg";
import { useSelector } from "react-redux";

const Authpage = () => {
  const isuserRegisterd = useSelector(({ user }) => user.registerd_User_info);


  return (
    <div className="Doublecol  min-h-screen">
      <section className="bg-secondary-main overflow-hidden size-full relative">
        <BlobSvg />
        <Appinfo />
      </section>
      <section className="relative place-self-stretch Col-center overflow-hidden">
        <SnowSvg />
        {isuserRegisterd ? (
          <>
            <Title msg={"LOGIN"} />
            <Login />
          </>
        ) : (
          <>
            <Title msg={"REGISTER"} />
            <Register />
          </>
        )}
      </section>
    </div>
  );
};

export default Authpage;
