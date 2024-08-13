export const metadata = {
  title: "BLA BLA LLC",
  description: "BLA BLA LLC is a modern logistics company",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Zigzag from "@/components/zigzag";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
    </>
  );
}
