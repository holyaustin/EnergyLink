// Core
import { useEffect } from "react";
import { useUser } from "contexts/User.context";

// Components
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Faqs } from "components/Faqs";

// Images
const Landing = () => {
  const { setCommunity } = useUser();

  useEffect(() => {
    setCommunity(null);
  }, []);

  return (
    <>
      <Hero />
      <div className="divider" />
      <Features />

      <Faqs />
    </>
  );
};

export default Landing;
