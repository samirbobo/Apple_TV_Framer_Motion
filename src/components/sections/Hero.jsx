import { useRef } from "react";
import Button from "../Button";
import Container from "../Container";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Hero() {
  const videoContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="text-white relative bg-background pb-16">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full"
      >
        <img
          className="sticky top-0 h-screen object-cover w-full"
          src="/public/posters/napoleon.webp"
        />
      </motion.div>
      <Container className="relative z-10 h-[--hero-height] pb-7">
        <motion.div
          className="flex flex-col h-full justify-end items-start"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          <h1 className="mb-10 text-4xl md:text-5xl font-bold">
            All Apple Originals. <br />
            Only on Apple TV+.
          </h1>
          <Button size="lg" className="mb-16">
            Stream now
          </Button>
          <p className="font-semibold">Watch on the 📺 app.</p>
        </motion.div>
      </Container>
    </div>
  );
}
