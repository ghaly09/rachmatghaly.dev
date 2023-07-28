import { NextPage } from "next";
import HomeDesc from "../components/Atoms/Descriptions/HomeDesc";

const Index: NextPage = () => {
  return (
    <section id="home" className="relative">
      {/* Header Title */}
      <HomeDesc />
    </section>
  );
};

export default Index;
