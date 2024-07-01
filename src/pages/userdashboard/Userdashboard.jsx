import UserdashboardSidebar from "../../components/layout/sidebar/userdashboardheder/Userdashboardsidebar";
import Userdashboardheader from "../../components/layout/header/userdashboardheader/Userdashboardheader";
import Statics from "./subcomponents/Statics";
import Graphicaldata from "./subcomponents/grapgicaldata/Graphicaldata";
import Assigmentsinfo from "./subcomponents/assignments/Assigmentsinfo";

function Userdashboard() {
  return (
    <div className="grid grid-cols-6 h-full">
      <aside className="col-span-1">
        <UserdashboardSidebar />
      </aside>
      <section className="col-span-5">
        <Userdashboardheader />
        <main>
          <Statics />
          <Graphicaldata />
          <Assigmentsinfo />
        </main>
      </section>
    </div>
  );
}

export default Userdashboard;
