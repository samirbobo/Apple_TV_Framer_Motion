/* eslint-disable react/prop-types */
import Button from "../Button";
import { useMemo, useRef, useState } from "react";
import { movies, randomMoviesSet1, randomMoviesSet2 } from "../../movies";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { useWindowSize } from "react-use";

export default function VideoCarousel() {
  // مكتبه بتتبع التغيرات الي بتحصل علي الشاشه زي العرض والارتفاع واشياء من هذا القبيل
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  // لقياس ارتفاع وعرض الصوره في كل احجام الشاشات المختلفه وبالتالي الانيمشين هيتعمل بظبط علي كل شاشه بشكل منفصل
  const maximumScale = useMemo(() => {
    const windowYRation = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRation;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1]
  );

  const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  // عشان يحرك الصوره الي علي الشمال من اقصي 20 بيكسل الي مكانها الطبيعي
  const postersTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  // عشان يحرك الصوره الي علي اليمين من اقصي 20 بيكسل الي مكانها الطبيعي
  const postersTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );

  const [carouselVariants, setCarouselVariants] = useState("active");

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariants("active");
    } else {
      setCarouselVariants("inactive");
    }
  });

  return (
    <motion.div animate={carouselVariants} className="bg-background pb-16">
      <div
        ref={carouselWrapperRef}
        className="mt-[-100vh] h-[300vh] overflow-clip"
      >
        <div className="sticky top-0 h-screen flex items-center">
          <div className="relative flex gap-5 mb-5 left-1/2 -translate-x-1/2">
            <motion.div
              style={{ opacity: postersOpacity, x: postersTranslateXLeft }}
              className="w-[300px] md:w-[60vw] aspect-[9/16] md:aspect-video shrink-0 rounded-2xl overflow-clip"
            >
              <img
                className="w-full h-full object-cover"
                src={movies[0].poster}
                alt={movies[0].name}
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className="w-[300px] md:w-[60vw] relative aspect-[9/16] md:aspect-video shrink-0 rounded-2xl overflow-clip "
            >
              <img
                className="w-full h-full object-cover"
                src={movies[1].poster}
                alt={movies[1].name}
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute left-0 bottom-0 flex items-center gap-4 p-5 text-white text-lg w-full flex-col md:flex-row md:justify-between md:gap-0"
              >
                <p>Best video title ever</p>
                <Button size="lg">Watch now</Button>
              </motion.div>
            </motion.div>
            <motion.div
              style={{ opacity: postersOpacity, x: postersTranslateXRight }}
              className="w-[300px] md:w-[60vw] aspect-[9/16] md:aspect-video shrink-0 rounded-2xl overflow-clip "
            >
              <img
                className="w-full h-full object-cover"
                src={movies[2].poster}
                alt={movies[2].name}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className="-mt-[calc((100vh-(300px*(16/9)))/2)] space-y-3 pt-4 md:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
      >
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <div className="[--carousel-offset:-32px] [--duration:55s]">
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </motion.div>
    </motion.div>
  );
}

const SmallVideoCarousel = ({ movies }) => {
  return (
    <div className="overflow-clip">
      <div className="flex gap-3 animate-carousel-move relative left-[var(--carousel-offset,0px)]">
        {movies.map((movie, index) => (
          <div
            className="w-[40vw] md:w-[23vw] aspect-video shrink-0 "
            key={`${movie.name}-${index}`}
          >
            <img
              className="w-full h-full object-cover rounded-xl"
              src={movie.poster}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
