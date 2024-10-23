import ApplecIcon from "./ApplecIcon";
import Button from "./Button";
import Container from "./Container";

export default function Header() {
  return (
    <>
      <header className="bg-backgroundContrast relative z-20 text-white ">
        <Container className="min-h-[--header-row-height] flex items-center">
          <a
            href="/"
            className="h-[--header-row-height] text-xl flex items-center px-6 -ml-6"
          />
          <ApplecIcon /> <span className="sr-only">Back to homePage</span>
        </Container>
      </header>
      <div className="bg-backgroundContrast text-white sticky top-0 z-20">
        <Container className="min-h-[--header-row-height] flex items-center justify-between">
          <p className="text-xl font-medium">Apple TV+</p>
          <Button size="sm">Stream now</Button>
        </Container>
      </div>
    </>
  );
}
