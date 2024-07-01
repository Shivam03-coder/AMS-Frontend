import Maincontent from "./subcomponnets/Maincontent";
import Nav from "../../components/layout/navbar/Navbar";
import { FooterWithSocialLinks } from "../../components/layout/footer/Footer";
import Features from "./subcomponnets/Features";
import MeteorSvg from "../../components/shared/svgs/MeteorSvg";
import Accordion from "./subcomponnets/Accordion";

const Homepage = () => {
  return (
    <section className="relative">
      <MeteorSvg />
      <header className="sticky top-0 z-30">
        <Nav />
      </header>
      <main>
        <div className="Doublecol gap-6">
          <Maincontent />
        </div>
    <div className="Doublecol gap-3 mt-7 md:-mt-7">
          <Accordion />
        </div>
            <div className="Doublecol gap-6 my-3">
          <Features />
        </div>
      </main>
      <footer>
        <FooterWithSocialLinks />
      </footer>
    </section>
  );
};

export default Homepage;
