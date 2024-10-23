import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Plans from "./components/sections/Plans";
import Usps from "./components/sections/Usps";
import VideoCarousel from "./components/sections/VideoCarousel";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
          <Plans />
        </div>
        <VideoCarousel />
      </main>
    </>
  );
}

export default App;
