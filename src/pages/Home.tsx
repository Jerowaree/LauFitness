import { Hero } from "../sections/Hero.tsx";
import { Benefits } from "../sections/Benefits.tsx";
import { Services } from "../sections/Services.tsx";
import { Plans } from "../sections/Plans.tsx";
import { InstagramFeed } from "../sections/InstagramFeed.tsx";
import { Testimonials } from "../sections/Testimonials.tsx";
import { FAQ } from "../sections/FAQ.tsx";
import { CTA } from "../sections/CTA.tsx";

export const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <Plans />
      <InstagramFeed />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};
