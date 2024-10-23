import Button from "../Button";
import Container from "../Container";
import FadeIn from "../FadeIn";

export default function Plans() {
  return (
    <Container className="pb-[150px] max-md:w-[87.5%] max-lg:max-w-[692px] px-0">
      <div className="flex flex-wrap md:flex-nowrap max-md:space-y-[60px]">
        <FadeIn margin={"100% 0px -150px 0px"}>
          <div className="basis-full md:basis-1/3">
            <h2 className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-4">
              Buy an Apple device
            </h2>
            <h3 className="text-white text-3xl lg:text-4xl font-bold mt-4">
              3 months free.
            </h3>
            <p className="text-[#A1A1A6] text-base font-normal mt-3 mb-8 max-w-[83.333333%] md:min-h-[100px]">
              Apple TV+ is included for 3 months when you purchase an Apple
              device and redeem the offer within 90 days.2
            </p>
            <Button className="font-bold text-sm min-w-[22px]" size="md">
              Check eligibility
            </Button>
          </div>
        </FadeIn>
        <FadeIn margin={"100% 0px -150px 0px"}>
          <div className="basis-full md:basis-1/3">
            <h2 className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-4">
              Free 7-day trial
            </h2>
            <h3 className="text-white text-3xl lg:text-4xl font-bold mt-4">
              $9.99/mo.
            </h3>
            <p className="text-[#A1A1A6] text-base font-normal mt-3 mb-8 max-w-[83.333333%] md:min-h-[100px]">
              A monthly subscription is just $9.99 per month after a free 7-day
              trial.3 Share Apple TV+ with your family.4
            </p>
            <Button className="font-bold text-sm min-w-[22px]" size="md">
              Try it free
            </Button>
          </div>
        </FadeIn>
        <FadeIn margin={"100% 0px -150px 0px"}>
          <div className="basis-full md:basis-1/3">
            <h2 className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-4">
              Free 1‑month trial
            </h2>
            <h3 className="text-white text-3xl lg:text-4xl font-bold mt-4">
              Apple One
            </h3>
            <p className="text-[#A1A1A6] text-base font-normal mt-3 mb-8 max-w-[83.333333%] md:min-h-[100px]">
              Bundle Apple TV+ with up to five other great services for one low
              monthly price. And enjoy more for less.
            </p>
            <Button className="font-bold text-sm min-w-[22px]" size="md">
              Try Apple One free
            </Button>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}
