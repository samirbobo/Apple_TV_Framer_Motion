import Container from "../Container";
import FadeIn from "../FadeIn";

export default function Usps() {
  return (
    <Container className="text-3xl md:text-4xl font-bold text-white space-y-12 pb-[150px] relative z-10 ">
      <FadeIn margin={"100% 0px -90px 0px"}>
        <p>New Apple Originals every month — always ad‑free.</p>
      </FadeIn>
      <FadeIn margin={"100% 0px -90px 0px"}>
        <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </p>
      </FadeIn>
      <FadeIn margin={"100% 0px -90px 0px"}>
        <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
      </FadeIn>
      <FadeIn margin={"100% 0px -90px 0px"}>
        <p>Share a single subscription with up to five people.</p>
      </FadeIn>
    </Container>
  );
}
