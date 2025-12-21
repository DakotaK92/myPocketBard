import Home from "@/components/Home";
import Info from "@/components/Info";
import Crew from "@/components/Crew";
import Price from "@/components/Price";
import Questions from "../components/Questions";

export default function HomePage() {
  return (
  <>
      <section id="home">
        <Home />
      </section>

      <section id="features">
        <Info />
      </section>

      <section id="crew">
        <Crew />
      </section>

      <section id="price">
        <Price />
      </section>

      <section id="questions">
        <Questions />
      </section>
    </>
  );
}
